//    LEMBRAR DE TROCAR O COMANDO DELAY POR MILLIS PARA EVITAR INTERRUPÇÃO NO CÓDIGO    //

//    BIBLIOTECAS   //
#include <SPI.h>
#include <Ethernet.h>
#include <SD.h>
#include <Wire.h>
#include <EmonLib.h>
#include <DS3231.h>

//    MEDIDOR   //
EnergyMonitor emon1;
float realPower1;  
float apparentPower1;    
float powerFActor1;      
float supplyVoltage1;             
float Irms1;

//    SENSORES   //
const int SensorCorrente_1 = A0;
const int SensorTensao_1 = A1;

//    SD    //
#define PIN_SD_CARD 4

//    RTC    //
DS3231 rtc;              
RTCDateTime dataehora;   

//    ENDEREÇO DISPOSITIVOS    //
int arduino_01 = 0x01;
int arduino_02 = 0x02;
int arduino_03 = 0x03;

//    TAMANHO MENSAGEM    //
int size_1;
int size_2;
int size_3;
int size_4;
int size_5;
int size_6;
int size_7;
int size_8;
int size_9;
int size_10;
int size_11;
int size_12;
int size_13;
int size_14;
int size_15;
int total_size_1;
int total_size_2;
int total_size_3;

//   MENSAGEM  //
char rP1[8];
char aP1[8];
char pF1[8];
char sV1[8];
char Ir1[8];
char mensagem;
String dados;
String data_hora;
String dados_arduino_0X00_01;
String dados_arduino_0X01_01;
String dados_arduino_0X01_02;
String dados_arduino_0X01_03;
String dados_arduino_0X02_01;
String dados_arduino_0X02_02;
String dados_arduino_0X02_03;
String dados_arduino_0X03_01;
String dados_arduino_0X03_02;
String dados_arduino_0X03_03;

//   DATA HORA   //
byte data;

//    MENSURAR AS GRANDEZAS    //
void medir(){
  emon1.calcVI(20,2000);

   //    MEDIDOR 01    //
  realPower1       = emon1.realPower;        
  apparentPower1   = emon1.apparentPower;    
  powerFActor1     = emon1.powerFactor;      
  supplyVoltage1   = emon1.Vrms;             
  Irms1            = emon1.Irms;
}

//    RECEBE AS MENSAGENS    //
void recebe_dados(){
  
  recebe_tamanho(arduino_01);
  dados_arduino_0X01_01 = recebe_escravo_1(arduino_01);
  dados_arduino_0X01_02 = recebe_escravo_2(arduino_01);
  dados_arduino_0X01_03 = recebe_escravo_3(arduino_01);

  recebe_tamanho(arduino_02);
  dados_arduino_0X02_01 = recebe_escravo_1(arduino_02);
  dados_arduino_0X02_02 = recebe_escravo_2(arduino_02);
  dados_arduino_0X02_03 = recebe_escravo_3(arduino_02);

  recebe_tamanho(arduino_03);
  dados_arduino_0X03_01 = recebe_escravo_1(arduino_03);
  dados_arduino_0X03_02 = recebe_escravo_2(arduino_03);
  dados_arduino_0X03_03 = recebe_escravo_3(arduino_03);
}

//    ENVIAR OS DADOS    //
void envia_dados(){  
  banco_de_dados(data_hora);
  banco_de_dados(dados_arduino_0X00_01);
  banco_de_dados(dados_arduino_0X01_01);
  banco_de_dados(dados_arduino_0X01_02);
  banco_de_dados(dados_arduino_0X01_03);
  banco_de_dados(dados_arduino_0X02_01);
  banco_de_dados(dados_arduino_0X02_02);
  banco_de_dados(dados_arduino_0X02_03);
  banco_de_dados(dados_arduino_0X03_01);
  banco_de_dados(dados_arduino_0X03_02);
  banco_de_dados(dados_arduino_0X03_03);
}

//    LIMPAR MENSAGENS    //
void limpar_string(){    
  data_hora="";
  dados_arduino_0X00_01 = "";
  dados_arduino_0X01_01 = "";
  dados_arduino_0X01_02 = "";
  dados_arduino_0X01_03 = "";
  dados_arduino_0X02_01 = "";
  dados_arduino_0X02_02 = "";
  dados_arduino_0X02_03 = "";
  dados_arduino_0X03_01 = "";
  dados_arduino_0X03_02 = "";
  dados_arduino_0X03_03 = "";
}

//    RTC    //
void relogio(){
    dataehora = rtc.getDateTime();
    data_hora += dataehora.year;
    data_hora += "/";
    data_hora += dataehora.month;
    data_hora += "/";
    data_hora += dataehora.day;
    data_hora += " ";
    data_hora += dataehora.hour;
    data_hora += ":";
    data_hora += dataehora.minute;
    data_hora += ":";
    data_hora += dataehora.second;
  }
  

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
void prepara_dado(float rP, float aP, float pF, float sV, float Ir){

  //   CONVERTE FLOAT PARA STRING   //
  dtostrf(rP, String(rP1).length(), 2, rP1);
  dtostrf(aP, String(aP1).length(), 2, aP1);
  dtostrf(pF, String(pF1).length(), 2, pF1);
  dtostrf(sV, String(sV1).length(), 2, sV1);
  dtostrf(Ir, String(Ir1).length(), 2, Ir1);
  
  dados_arduino_0X00_01 += rP1;
  dados_arduino_0X00_01 += ", ";
  dados_arduino_0X00_01 += aP1;
  dados_arduino_0X00_01 += ", ";
  dados_arduino_0X00_01 += pF1;
  dados_arduino_0X00_01 += ", ";
  dados_arduino_0X00_01 += sV1;
  dados_arduino_0X00_01 += ", ";
  dados_arduino_0X00_01 += Ir1;
  dados_arduino_0X00_01 += ", ";
}

//   VERIFICAR O TAMANHO DA MENSAGEM  //
void recebe_tamanho(int endereco){
  Wire.requestFrom(endereco,15);
  while (Wire.available()){
    mensagem = Wire.read();
    size_1 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_2 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_3 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_4 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_5 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_6 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_7 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_8 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_9 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_10 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_11 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_12 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_13 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_14 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_15 = String(mensagem).toInt();
  }
  total_size_1 = size_1 + size_2 + size_3 + size_4 + size_5;
  total_size_2 = size_6 + size_7 + size_8 + size_9 + size_10;
  total_size_3 = size_11 + size_12 + size_13 + size_14 + size_15;
}

//    RECEBE OS DADOS DO DISPOSITIVO ESCRAVO    //
String recebe_escravo_1(int endereco){ 
  Wire.requestFrom(endereco,total_size_1);    // (ENDEREÇO,QUANTIDADE DE BYTES)
  while (Wire.available()){
    for(int i = 0; i < size_1; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_2; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_3; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_4; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_5; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
  }
  return dados;
}

//    RECEBE OS DADOS DO DISPOSITIVO ESCRAVO    //
String recebe_escravo_2(int endereco){ 
  Wire.requestFrom(endereco,total_size_2);    // (ENDEREÇO,QUANTIDADE DE BYTES)
  while (Wire.available()){
    dados += ", "; 
    for(int i = 0; i < size_6; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_7; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_8; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_9; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_10; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", ";
  }
  return dados;
}

//    RECEBE OS DADOS DO DISPOSITIVO ESCRAVO    //
String recebe_escravo_3(int endereco){ 
  Wire.requestFrom(endereco,total_size_3);    // (ENDEREÇO,QUANTIDADE DE BYTES)
  while (Wire.available()){ 
    for(int i = 0; i < size_11; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_12; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_13; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_14; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_15; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", ";        
  }
  return dados;  
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
 
void iniciar_ethernet(){
  byte ip[4]      = {192,168,0,40};                    
  byte gateway[4] = {192,168,0,1};
  byte subnet[4]  = {255,255,255,0};
  byte mac[6]     = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
  int  porta      = 80;
  server = new EthernetServer(porta);
  Ethernet.begin(mac, ip, gateway, subnet);
  server->begin();
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
  rtc.begin();
  rtc.setDateTime(__DATE__, __TIME__);  //  COMENTAR APOS A PRIMEIRA COMPILAÇÃO
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

  //    MEDIDOR DE ENERGIA    //
  medir();

  //    AQUISIÇÃO DE DADOS    //
  prepara_dado(realPower1,apparentPower1,powerFActor1,supplyVoltage1,Irms1);
  relogio();
  recebe_dados();

  //    BANCO DE DADOS    //
  envia_dados();

  //    REINICIAR AS MENSAGENS    //
  limpar_string();
}

 
