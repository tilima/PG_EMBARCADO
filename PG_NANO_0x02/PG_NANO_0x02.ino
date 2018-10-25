//    LEMBRAR DE TROCAR O COMANDO DELAY POR MILLIS PARA EVITAR INTERRUPÇÃO NO CÓDIGO    //

#include <Wire.h>
#include <EmonLib.h>

//    MEDIDORES   //
EnergyMonitor emon1;
EnergyMonitor emon2;
EnergyMonitor emon3;

//   FLAG   //
int flag = 0;

//    MEDIDOR 01    //
  float realPower1;           
  float apparentPower1;      
  float powerFActor1;       
  float supplyVoltage1;              
  float Irms1;           

//    MEDIDOR 02    //
  float realPower2;           
  float apparentPower2;      
  float powerFActor2;       
  float supplyVoltage2;              
  float Irms2;           

//    MEDIDOR 03    //
  float realPower3;           
  float apparentPower3;      
  float powerFActor3;       
  float supplyVoltage3;              
  float Irms3;                        

//   TAMANHO MENSAGEM   //
char size_1c[4];
char size_2c[4];
char size_3c[4];
char size_4c[4];
char size_5c[4];
char size_6c[4];
char size_7c[4];
char size_8c[4];
char size_9c[4];
char size_10c[4];
char size_11c[4];
char size_12c[4];
char size_13c[4];
char size_14c[4];
char size_15c[4];
String size_1;
String size_2;
String size_3;
String size_4;
String size_5;
String size_6;
String size_7;
String size_8;
String size_9;
String size_10;
String size_11;
String size_12;
String size_13;
String size_14;
String size_15;

//   MENSAGEM MEDIDOR 01   //
char rP1[8];
char aP1[8];
char pF1[8];
char sV1[8];
char Ir1[8];

//   MENSAGEM MEDIDOR 02   //
char rP2[8];
char aP2[8];
char pF2[8];
char sV2[8];
char Ir2[8];

//   MENSAGEM MEDIDOR 03   //
char rP3[8];
char aP3[8];
char pF3[8];
char sV3[8];
char Ir3[8];

//    SENSORES   //
const int SensorCorrente_1 = A0;
const int SensorTensao_1 = A1;
const int SensorCorrente_2 = A2;
const int SensorTensao_2 = A3;
const int SensorCorrente_3 = A6;
const int SensorTensao_3 = A7;

//    MENSURAR AS GRANDEZAS    //
void medir(){
  //    MEDIDOR DE ENERGIA    //
  emon1.calcVI(20,2000);
  emon2.calcVI(20,2000);
  emon3.calcVI(20,2000);

  //    MEDIDOR 01    //
  realPower1       = emon1.realPower;        
  apparentPower1   = emon1.apparentPower;    
  powerFActor1     = emon1.powerFactor;      
  supplyVoltage1   = emon1.Vrms;             
  Irms1            = emon1.Irms;             

  //    MEDIDOR 02    //
  realPower2       = emon2.realPower;        
  apparentPower2   = emon2.apparentPower;    
  powerFActor2     = emon2.powerFactor;     
  supplyVoltage2   = emon2.Vrms;             
  Irms2            = emon2.Irms;             

  //    MEDIDOR 03    //
  realPower3       = emon3.realPower;        
  apparentPower3   = emon3.apparentPower;    
  powerFActor3     = emon3.powerFactor;      
  supplyVoltage3   = emon3.Vrms;             
  Irms3            = emon3.Irms;             
}

//    ORGANIZA OS DADOS MEDIDOS    //
void prepara_dado(){

  //   CONVERTE FLOAT PARA STRING   //
  dtostrf(realPower1, String(realPower1).length(), 2, rP1);
  dtostrf(apparentPower1, String(apparentPower1).length(), 2, aP1);
  dtostrf(powerFActor1, String(powerFActor1).length(), 2, pF1);
  dtostrf(supplyVoltage1, String(supplyVoltage1).length(), 2, sV1);
  dtostrf(Irms1, String(Irms1).length(), 2, Ir1);

  dtostrf(realPower2, String(realPower2).length(), 2, rP2);
  dtostrf(apparentPower2, String(apparentPower2).length(), 2, aP2);
  dtostrf(powerFActor2, String(powerFActor2).length(), 2, pF2);
  dtostrf(supplyVoltage2, String(supplyVoltage2).length(), 2, sV2);
  dtostrf(Irms2, String(Irms2).length(), 2, Ir2); 

  dtostrf(realPower3, String(realPower3).length(), 2, rP3);
  dtostrf(apparentPower3, String(apparentPower3).length(), 2, aP3);
  dtostrf(powerFActor3, String(powerFActor3).length(), 2, pF3);
  dtostrf(supplyVoltage3, String(supplyVoltage3).length(), 2, sV3);
  dtostrf(Irms3, String(Irms3).length(), 3, Ir3); 

  //  ARMAZENA O TAMANHO DA STRING   //
  size_1 = String(realPower1).length();  
  size_2 = String(apparentPower1).length();
  size_3 = String(powerFActor1).length();
  size_4 = String(supplyVoltage1).length();
  size_5 = String(Irms1).length();
  size_6 = String(realPower2).length();  
  size_7 = String(apparentPower2).length();
  size_8 = String(powerFActor2).length();
  size_9 = String(supplyVoltage2).length();
  size_10 = String(Irms2).length();
  size_11 = String(realPower3).length();  
  size_12 = String(apparentPower3).length();
  size_13 = String(powerFActor3).length();
  size_14 = String(supplyVoltage3).length();
  size_15 = String(Irms3).length();
  
  //   CONVERTE EM CHAR PARA ENVIO   //
  size_1.toCharArray(size_1c,String(realPower1).length());
  size_2.toCharArray(size_2c,String(apparentPower1).length());
  size_3.toCharArray(size_3c,String(powerFActor1).length());
  size_4.toCharArray(size_4c,String(supplyVoltage1).length());
  size_5.toCharArray(size_5c,String(Irms1).length());
  size_6.toCharArray(size_6c,String(realPower2).length());
  size_7.toCharArray(size_7c,String(apparentPower2).length());
  size_8.toCharArray(size_8c,String(powerFActor2).length());
  size_9.toCharArray(size_9c,String(supplyVoltage2).length());
  size_10.toCharArray(size_10c,String(Irms2).length());
  size_11.toCharArray(size_11c,String(realPower3).length());
  size_12.toCharArray(size_12c,String(apparentPower3).length());
  size_13.toCharArray(size_13c,String(powerFActor3).length());
  size_14.toCharArray(size_14c,String(supplyVoltage3).length());
  size_15.toCharArray(size_15c,String(Irms3).length());
}

//   ENVIA OS DADOS   //
void requestEvent() {
  switch (flag) {
    
    case 0:
      Wire.write(size_1c);
      Wire.write(size_2c);
      Wire.write(size_3c);
      Wire.write(size_4c);
      Wire.write(size_5c);
      Wire.write(size_6c);
      Wire.write(size_7c);
      Wire.write(size_8c);
      Wire.write(size_9c);
      Wire.write(size_10c);
      Wire.write(size_11c);
      Wire.write(size_12c);
      Wire.write(size_13c);
      Wire.write(size_14c);
      Wire.write(size_15c);
      flag = 1;
      break;

    case 1:
      Wire.write(rP1); 
      Wire.write(aP1); 
      Wire.write(pF1); 
      Wire.write(sV1); 
      Wire.write(Ir1); 
      flag = 2;
      break;

    case 2:
      Wire.write(rP2); 
      Wire.write(aP2); 
      Wire.write(pF2); 
      Wire.write(sV2); 
      Wire.write(Ir2); 
      flag = 3;
      break;

    case 3:
      Wire.write(rP3); 
      Wire.write(aP3); 
      Wire.write(pF3); 
      Wire.write(sV3); 
      Wire.write(Ir3);
      flag = 0;
      break;
    }
}

void setup() {

//    INICIALIZA OS PINOS DIGITAIS    //
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);
  pinMode(A2,INPUT);
  pinMode(A3,INPUT);
  pinMode(A6,INPUT);
  pinMode(A7,INPUT);

//   INICIALIZA O PROTOCOLO I2C   //
  Wire.begin(0x02);                
  Wire.onRequest(requestEvent); 

// INICIALIZA A PORTA SERIAL
  Serial.begin(9600);

//   INICIALIZA OS SENSORES   //
  emon1.current(SensorCorrente_1,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon1.voltage(SensorTensao_1,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
  emon2.current(SensorCorrente_2,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon2.voltage(SensorTensao_2,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
  emon3.current(SensorCorrente_3,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon3.voltage(SensorTensao_3,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
}

void loop() {
  medir();
  prepara_dado();
  delay(1);
}