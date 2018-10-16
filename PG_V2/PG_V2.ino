//    BIBLIOTECAS   //
#include <SPI.h>
#include <Ethernet.h>
#include <SD.h>
#include <Wire.h>
#include <EmonLib.h>

//    DECLARA OS MEDIDORES   //
EnergyMonitor emon1;

//    DECLARA OS PINOS DO ARDUINO   //
const int SensorCorrente_1 = A0;
const int SensorTensao_1 = A1;

//    DECLARA SD   //
#define PIN_SD_CARD 4

//    DECLARA DISPOSITIVOS    //
int RTC = 0x00;
int arduino_01 = 0x01;
int arduino_02 = 0x02;
int arduino_03 = 0x03;

//    DECLARA MENSAGEM    //
char rP1[7];
char aP1[7];
char pF1[2];
char sV1[8];
char Ir1[2];
byte data;
unsigned char mensagem;
String dados_arduino_00;
String dados_arduino_01;
String dados_arduino_02;
String dados_arduino_03;

//    DATALOG SD  //
void banco_de_dados(String dataString){
  File dataFile = SD.open("datalog.txt", FILE_WRITE);
  if (dataFile) {
    dataFile.println(dataString);
    dataFile.close();
    Serial.println(dataString);
  } else {
      Serial.println("error opening datalog.txt");
    }
}

//    ORGANIZA OS DADOS MEDIDOS    //
void prepara_dado(double rP, double aP, double pF, double sV, double Ir){
  dtostrf(rP, 5, 2, rP1);
  dtostrf(aP, 5, 2, aP1);
  dtostrf(pF, 4, 2, pF1);
  dtostrf(sV, 6, 2, sV1);
  dtostrf(Ir, 5, 3, Ir1);
  dados_arduino_00 += rP1;
  dados_arduino_00 += ", ";
  dados_arduino_00 += aP1;
  dados_arduino_00 += ", ";
  dados_arduino_00 += pF1;
  dados_arduino_00 += ", ";
  dados_arduino_00 += sV1;
  dados_arduino_00 += ", ";
  dados_arduino_00 += Ir1;
}

//    RECEBE OS DADOS DO DISPOSITIVO ESCRAVO    //
char recebe_escravo(int endereco, int tamanho){ 
  Wire.requestFrom(endereco, tamanho);    // (ENDEREÇO,QUANTIDADE DE BYTES)
  while (Wire.available()){ 
    mensagem = Wire.read(); 
    Serial.print(mensagem); 
  }
  return mensagem;
}

//    USUARIO E SENHA   // 
boolean validar_usuario(char * linebuf){
  char usuario_senha[] = "admin:admin"; //"usuario:senha";
  byte t = strlen(usuario_senha);
  int tamanhoEnc = (((t-1) / 3) + 1) * 4; //tamanho da string codificada
  char *out = base64_encode(usuario_senha, t);
  char out2[tamanhoEnc];
  for (t=0; t<(tamanhoEnc); t++) { out2[t] = linebuf[21+t]; }
  return (strstr(out2, out)>0);
}
 
//    SD CARD   //   
boolean iniciar_sd_card() {
  pinMode(10, OUTPUT);
  digitalWrite(10, HIGH); 
  if (!SD.begin(PIN_SD_CARD)){ return false; }  
  return true;
}

//    WEBSERVER    //
EthernetServer * server;
 
void write_from_file(EthernetClient &client, char * filename){
  File webFile = SD.open(filename);
  if (webFile) {
    while(webFile.available()) { client.write(webFile.read()); }
    webFile.close();
  } 
  else {
    Serial.print("Erro SD CARD: ");
    Serial.println(filename);
  }
}
 
void iniciar_ethernet_01(){
  byte ip[4]      = {192,168,0,40};                    
  byte gateway[4] = {192,168,0,1};
  byte subnet[4]  = {255,255,255,0};
  byte mac[6]     = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
  int  porta      = 80;
  server = new EthernetServer(porta);
  Ethernet.begin(mac, ip, gateway, subnet);
  server->begin();
}
 
void iniciar_ethernet(){
  iniciar_ethernet_01();               
}
 
void html_cab_200_ok(EthernetClient &client){   
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/html\n"
                   "Connection: keep-alive\n\n"));
}
 
void html_logoff(EthernetClient &client){
    client.print(F(
                 "HTTP/1.1 401 Authorization Required\n"  
                 "Content-Type: text/html\n"  
                 "Connnection: close\n\n"  
                 "<!DOCTYPE HTML>\n"  
                 "<html><head><title>Logoff</title>\n"  
                 "<script>document.execCommand('ClearAuthenticationCache', 'false');</script>"  //IE logoff
                 "<script>try {"                                                                //mozila logoff
                 "   var agt=navigator.userAgent.toLowerCase();"
                 "   if (agt.indexOf(\"msie\") != -1) { document.execCommand(\"ClearAuthenticationCache\"); }"
                 "   else {"
                 "     var xmlhttp = createXMLObject();"
                 "      xmlhttp.open(\"GET\",\"URL\",true,\"logout\",\"logout\");"
                 "     xmlhttp.send(\"\");"
                 "     xmlhttp.abort();"
                 "   }"
                 " } catch(e) {"
                 "   alert(\"erro ao fazer logoff\");"
                 " }"
                 "function createXMLObject() {"
                 "  try {if (window.XMLHttpRequest) {xmlhttp = new XMLHttpRequest();} else if (window.ActiveXObject) {xmlhttp=new ActiveXObject(\"Microsoft.XMLHTTP\");}} catch (e) {xmlhttp=false;}"
                 "  return xmlhttp;"
                 "}</script>"
                 "</head><body><h1>Voce nao esta mais conectado</h1></body></html>\n"));
}
 
void html_autenticar(EthernetClient &client) {
  client.print(F("HTTP/1.1 401 Authorization Required\n"  
               "WWW-Authenticate: Basic realm=\"Area Restrita\"\n"  
               "Content-Type: text/html\n"  
               "Connnection: close\n\n"  
               "<!DOCTYPE HTML>\n"  
               "<html><head><title>Error</title>\n"  
               "</head><body><h1>401 Acesso nao autorizado</h1></body></html>\n"));
}
 
void html_autenticado(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/html\n"
                   "Connection: keep-alive\n")); 
  write_from_file(client, filename);
}
 
void js_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/javascript\n"
                   "Connection: keep-alive\n")); 
  write_from_file(client, filename);
}
 
void css_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/css\n"
                   "Connection: keep-alive\n"));
  write_from_file(client, filename);
}
 
void favicon_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: image/x-icon\n"
                   "Connection: keep-alive\n"));
  write_from_file(client, filename);
}
  
void pdf_file_download(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: application/download\n"
                   "Connection: close\n"));    
  write_from_file(client, filename);
}
 
void jpg_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: file/jpg\n"
                   "Connection: close\n"));    
  write_from_file(client, filename);
}
  
void exec_ethernet() {
  EthernetClient client = server->available();
  if (client) {
    char linebuf[80];
    memset(linebuf, 0, sizeof(linebuf));  
    int     charCount          = 0;
    boolean autenticado        = false;
    boolean currentLineIsBlank = true;
    boolean logoff             = false;
    boolean indCss             = false;
    boolean indJs              = false;
    boolean indPdfDataSheet    = false;
    boolean indJpgUno          = false;
    boolean indFavicon         = false; 
    while (client.connected()){
      if (client.available()){
        char c = client.read(); 
        linebuf[charCount] = c;
        if (charCount<sizeof(linebuf)-1){ charCount++; }
        Serial.write(c); 
        if (c == '\n' && currentLineIsBlank){
          if (autenticado && !logoff ){
            if (indJs){
              js_file(client, "js.js");                          //js file
            } else if(indCss){
              css_file(client, "css.css");                       //css file  
            } else if(indPdfDataSheet){
              pdf_file_download(client, "atmel.pdf");        //datasheet download
            } else if(indJpgUno){
              jpg_file(client, "uno.jpg");                       //jpg file
            } else if(indFavicon){
              jpg_file(client, "favicon.ico");                   //icone do browser
            } else {
              html_autenticado(client, "index.htm");             //página inicial
            }
          } else {
            logoff ? html_logoff(client) : html_autenticar(client);
          }
          break;
        }
        if (c == '\n') { 
          currentLineIsBlank = true;               
          if (strstr(linebuf, "GET /logoff"         )>0 ) { logoff = true; }
          if (strstr(linebuf, "Authorization: Basic")>0 ) { if ( validar_usuario(linebuf) )   {  autenticado = true;   } }  
          if (strstr(linebuf, "GET /css.css"        )>0 ) { indCss = true; }
          if (strstr(linebuf, "GET /js.js"          )>0 ) { indJs = true; }
          if (strstr(linebuf, "GET /atmel.pdf"      )>0 ) { indPdfDataSheet = true; }
          if (strstr(linebuf, "GET /uno.jpg"        )>0 ) { indJpgUno = true; }
          if (strstr(linebuf, "GET /favicon.ico"    )>0 ) { indFavicon = true; } 
          memset(linebuf, 0, sizeof(linebuf));
          charCount = 0;
        } else if (c != '\r') {
          currentLineIsBlank = false;
        }
      }
    }
    delay(1);           
    client.stop();      
  }
}
 
//    BASE 64 CODE/DECODE   //
static const char b64all[] =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef"
"ghijklmnopqrstuvwxyz0123456789+/";

const char *base64_encode(const char *original, int length) {
  if (length == 0)
  length = strlen(original);
  
  // Inteiro com o tamanho do código a ser gerado
  int b64length = ((length + 2) / 3) * 4 + 1;
  
  // Contadores para percorrer as strings
  int i=0, j=0;
  
  // Alocando memória para o código
  char *b64 = (char *) malloc(sizeof(char) * b64length);
  memset(b64, 0, b64length);
  
  while (i < length) {
  // Codifica um grupo de três bytes...
  _encode(
  (uint8_t *) b64 + j,
  (const uint8_t *) original + i,
  (length - i)
  );
  
  // E segue para o próximo grupo
  i += 3;
  j += 4;
  }
  
  // Retorna o código
  return (const char *) b64;
}

void _encode(uint8_t *dest, const uint8_t *src, int len) {
// Menor que 1, nada a fazer
if (len < 1)
return;

// Dados a serem retornados
int aux[] = { 0, 0, 0, 0 };

// Primeiro elemento: os 6 bits mais significativos do primeiro
// byte
aux[0] = src[0] >> 2;

// Segundo elemento: os 2 bits menos significativos do primeiro e
// os quatro bits mais significativos do segundo byte
aux[1] = (src[0] & 0x03) << 4;

if (len > 1) {
// SE houver um segundo...
aux [1] |= (src[1] & 0xf0) >> 4;

// Terceiro elemento: os quatro bits menos significativos do
// segundo e os dois mais significativos do terceiro byte
aux [2] = (src[1] & 0x0f) << 2;

if (len > 2) {
// Se houver um terceiro...
aux[2] |= src[2] >> 6;

// Quarto elemento: os seis bits menos significatos do
// terceiro byte
aux[3] = src[2] & 0x3f;
}
}

// Codifica agora os valores numéricos para string
dest[0] = b64all[aux[0]];
dest[1] = b64all[aux[1]];
dest[2] = '=';
dest[3] = '=';
if (len > 1) {
dest[2] = b64all[aux[2]];
if (len > 2)
dest[3] = b64all[aux[3]];
}
}

//INCIALIZAÇÃO// 
void setup() {
  
  //    PINOS ANALÓGICOS    //
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);
  
  //    BIBLIOTECAS   //
  Wire.begin();  
  Serial.begin(9600);
  iniciar_sd_card();
  iniciar_ethernet();

  //    MEDIDORES   //
  emon1.current(SensorCorrente_1,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon1.voltage(SensorTensao_1,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
}

//LOOP//
void loop() {

  //    RELÉS   //
  

  //    SERVIDOR    //
  exec_ethernet();

  //    MEDIDOR DE ENERGIA//
  emon1.calcVI(20,2000);

  //    MEDIDOR 01    //
  double realPower1       = emon1.realPower;        
  double apparentPower1   = emon1.apparentPower;    
  double powerFActor1     = emon1.powerFactor;      
  double supplyVoltage1   = emon1.Vrms;             
  double Irms1            = emon1.Irms;
  prepara_dado(realPower1,apparentPower1,powerFActor1,supplyVoltage1,Irms1);
  //    TESTE LEITURA   //
  //emon1.serialprint();
  //Serial.println(dados_arduino_00);
  banco_de_dados(dados_arduino_00);
  dados_arduino_00 = "";

  //    AQUISIÇÃO DE DADOS    //
  //data = recebe_escravo(RTC,???);
  dados_arduino_01 = recebe_escravo(arduino_01,89);
  dados_arduino_02 = recebe_escravo(arduino_02,89);
  dados_arduino_03 = recebe_escravo(arduino_03,89);
}

 
