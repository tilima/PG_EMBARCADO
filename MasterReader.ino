//ARDUINO MEGA
#include <Wire.h>
#include <Ethernet.h>
#include <EmonLib.h>

//    DECLARA OS MEDIDORES   //
EnergyMonitor emon1;
EnergyMonitor emon2;
EnergyMonitor emon3;
//EnergyMonitor emon4;
//EnergyMonitor emon5;
//EnergyMonitor emon6;
//EnergyMonitor emon7;
//EnergyMonitor emon8;

//    DECLARA OS PINOS DO ARDUINO   //
const int SensorCorrente_1 = A0;
const int SensorTensao_1 = A1;
const int SensorCorrente_2 = A2;
const int SensorTensao_2 = A3;
const int SensorCorrente_3 = A4;
const int SensorTensao_3 = A5;
//const int SensorCorrente_4 = A6;
//const int SensorTensao_4 = A7;
//const int SensorCorrente_5 = A8;
//const int SensorTensao_5 = A9;
//const int SensorCorrente_6 = A10;
//const int SensorTensao_6 = A11;
//const int SensorCorrente_7 = A12;
//const int SensorTensao_7 = A13;
//const int SensorCorrente_8 = A14;
//const int SensorTensao_8 = A15;
const int Rele_1 = 9;
const int Rele_2 = 8;
const int Rele_3 = 7;
//const int Rele_4 = 6;
//const int Rele_5 = 5;
//const int Rele_6 = 4;
//const int Rele_7 = 3;
//const int Rele_8 = 2;
//const int Rele_9 = 22;
//const int Rele_10 = 23;

//    DECLARA AS VARIÁVEIS   //
unsigned char mensagem;
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192,168,0,25);         //Define o endereco IP
IPAddress gateway(192,168,0,1);     //Define o gateway
IPAddress subnet(255, 255, 255, 0); //Define a máscara de rede 
EthernetServer server(80);          //Inicializa o servidor web na porta 80

void setup() {
  //    INICIALIZA OS PINOS DIGITAIS    //
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);
  pinMode(A2,INPUT);
  pinMode(A3,INPUT);
  pinMode(A4,INPUT);
  pinMode(A5,INPUT);
  pinMode(A6,INPUT);
  pinMode(A7,INPUT);
  pinMode(A8,INPUT);
  pinMode(A9,INPUT);
  pinMode(A10,INPUT);
  pinMode(A11,INPUT);
  pinMode(A12,INPUT);
  pinMode(A13,INPUT);
  pinMode(A14,INPUT);
  pinMode(A15,INPUT);  
  pinMode(2,OUTPUT);
  pinMode(3,OUTPUT);
  pinMode(4,OUTPUT);
  pinMode(5,OUTPUT);
  pinMode(6,OUTPUT);
  pinMode(7,OUTPUT);
  pinMode(8,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(22,OUTPUT);
  pinMode(23,OUTPUT);
  
  //    INICIALIZA A INTERFACE DE REDE    // 
  Ethernet.begin(mac, ip, gateway, subnet);
  server.begin();
  
  //    INICIALIZA O PROTOCOLO I2C    //
  Wire.begin();        
  Serial.begin(9600);  
  
  //   INICIALIZA OS SENSORES   //
  emon1.current(SensorCorrente_6,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon1.voltage(SensorTensao_6,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
  emon2.current(SensorCorrente_2,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon2.voltage(SensorTensao_2,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
  emon3.current(SensorCorrente_3,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon3.voltage(SensorTensao_3,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
//  emon4.current(SensorCorrente_4,64); // (PINO,GANHO/CALIBRAÇÃO)
//  emon4.voltage(SensorTensao_4,64,2); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
//  emon5.current(SensorCorrente_5,64); // (PINO,GANHO/CALIBRAÇÃO)
//  emon5.voltage(SensorTensao_5,64,2); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
//  emon6.current(SensorCorrente_6,64); // (PINO,GANHO/CALIBRAÇÃO)
//  emon6.voltage(SensorTensao_6,64,2); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
//  emon7.current(SensorCorrente_7,64); // (PINO,GANHO/CALIBRAÇÃO)
//  emon7.voltage(SensorTensao_7,64,2); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
//  emon8.current(SensorCorrente_8,64); // (PINO,GANHO/CALIBRAÇÃO)
//  emon8.voltage(SensorTensao_8,64,2); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
}

void loop() {

  //    RELE    //

  
  digitalWrite(2,LOW);
  digitalWrite(3,LOW);
  digitalWrite(4,LOW);
  digitalWrite(5,LOW);
  digitalWrite(6,LOW);
  digitalWrite(7,LOW);
  digitalWrite(8,LOW);
  digitalWrite(9,LOW);
  digitalWrite(22,LOW);
  digitalWrite(23,LOW);
  
  //    MEDIDOR DE ENERGIA    //
  emon1.calcVI(20,2000);
  emon2.calcVI(20,2000);
  emon3.calcVI(20,2000);
//emon4.calcVI(20,2000);
//emon5.calcVI(20,2000);
//emon6.calcVI(20,2000);
//emon7.calcVI(20,2000);
//emon8.calcVI(20,2000);

  //    DADOS DA MEDIÇÃO    //

  //    MEDIDOR 01    //
  double realPower1       = emon1.realPower;        
  double apparentPower1   = emon1.apparentPower;    
  double powerFActor1     = emon1.powerFactor;      
  double supplyVoltage1   = emon1.Vrms;             
  double Irms1            = emon1.Irms;             

  //    MEDIDOR 02    //
  float realPower2       = emon2.realPower;        
  float apparentPower2   = emon2.apparentPower;    
  float powerFActor2     = emon2.powerFactor;     
  float supplyVoltage2   = emon2.Vrms;             
  float Irms2            = emon2.Irms;             

  //    MEDIDOR 03    //
  float realPower3       = emon3.realPower;        
  float apparentPower3   = emon3.apparentPower;    
  float powerFActor3     = emon3.powerFactor;      
  float supplyVoltage3   = emon3.Vrms;             
  float Irms3            = emon3.Irms;             
//
//  //    MEDIDOR 04    //
//  float realPower4       = emon4.realPower;        
//  float apparentPower4   = emon4.apparentPower;    
//  float powerFActor4     = emon4.powerFactor;      
//  float supplyVoltage4   = emon4.Vrms;             
//  float Irms4            = emon4.Irms;             
//
//  //    MEDIDOR 05    //
//  float realPower5       = emon5.realPower;        
//  float apparentPower5   = emon5.apparentPower;    
//  float powerFActor5     = emon5.powerFactor;      
//  float supplyVoltage5   = emon5.Vrms;             
//  float Irms5            = emon5.Irms;             
//
//  //    MEDIDOR 06    //
//  float realPower6       = emon6.realPower;        
//  float apparentPower6   = emon6.apparentPower;    
//  float powerFActor6     = emon6.powerFactor;      
//  float supplyVoltage6   = emon6.Vrms;             
//  float Irms6            = emon6.Irms;             
//
//  //    MEDIDOR 07    //
//  float realPower7       = emon7.realPower;        
//  float apparentPower7   = emon7.apparentPower;    
//  float powerFActor7     = emon7.powerFactor;      
//  float supplyVoltage7   = emon7.Vrms;             
//  float Irms7            = emon7.Irms;             
//
//  //    MEDIDOR 08    //
//  float realPower8       = emon8.realPower;        
//  float apparentPower8   = emon8.apparentPower;    
//  float powerFActor8     = emon8.powerFactor;      
//  float supplyVoltage8   = emon8.Vrms;             
//  float Irms8            = emon8.Irms;

  //    TESTE LEITURA   //
  emon1.serialprint();
  emon2.serialprint();
  emon3.serialprint();

  // AINDA NÃO CONFIGURADO //
  //    RECEBE OS DADOS DO ARDUINO ESCRAVO    //
  Wire.requestFrom(1, 1);    // request 6 bytes from slave device #1
  while (Wire.available()){ // slave may send less than requested
    mensagem = Wire.read(); // receive a byte as character
    Serial.print(mensagem);         // print the character
  }

  // CODIGO EXEMPLO //
  //    AGUARDA CONEXAO DO BROWSER    //
  EthernetClient client = server.available();
  if (client) {
    Serial.println("new client");
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so you can send a reply
        if (c == 'n' && currentLineIsBlank) {
          // send a standard http response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");
          client.println("Refresh: 2"); //Recarrega a pagina a cada 2seg
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");
          //Configura o texto e imprime o titulo no browser
          client.print("<font color=#FF0000><b><u>");
          client.print("Envio de informacoes pela rede utilizando Arduino");
          client.print("</u></b></font>");
          client.println("<br />");
          client.println("<br />");
          //Mostra as informacoes lidas do arduino UNO
          client.print("Mensagem Recebida : ");
          client.print("<b>");
          client.print(mensagem);
          client.println("</b></html>");
          break;
        }
        if (c == 'n') {
          // you're starting a new line
          currentLineIsBlank = true;
        } 
        else if (c != 'r') {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }
      }
    }
    // give the web browser time to receive the data
    delay(1);
    // close the connection:
    client.stop();
    }
    
//  delay(100);
}

