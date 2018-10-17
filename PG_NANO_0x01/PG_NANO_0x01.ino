#include <Wire.h>
#include <EmonLib.h>

//    DECLARA OS MEDIDORES   //
EnergyMonitor emon1;
EnergyMonitor emon2;
EnergyMonitor emon3;

//   DECLARA GRANDEZAS   //

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

//   FLAG GLOBAL   //
boolean flag_envio = false;

//   DECLARA MENSAGEM   //
char dados_arduino;

//   MEDIDOR 01   //
char rP1[7];
char aP1[7];
char pF1[2];
char sV1[8];
char Ir1[2];

//   MEDIDOR 02   //
char rP2[7];
char aP2[7];
char pF2[2];
char sV2[8];
char Ir2[2];

//   MEDIDOR 03   //
char rP3[7];
char aP3[7];
char pF3[2];
char sV3[8];
char Ir3[2];

//    DECLARA OS PINOS DO ARDUINO   //
const int SensorCorrente_1 = A0;
const int SensorTensao_1 = A1;
const int SensorCorrente_2 = A2;
const int SensorTensao_2 = A3;
const int SensorCorrente_3 = A6;
const int SensorTensao_3 = A7;

//    ORGANIZA OS DADOS MEDIDOS    // POSSUI ERRO
void prepara_dado(){  
  dtostrf(realPower1, 5, 2, rP1);
  dtostrf(apparentPower1, 5, 2, aP1);
  dtostrf(powerFActor1, 4, 2, pF1);
  dtostrf(supplyVoltage1, 6, 2, sV1);
  dtostrf(Irms1, 5, 3, Ir1);  
  dtostrf(realPower2, 5, 2, rP2);
  dtostrf(apparentPower2, 5, 2, aP2);
  dtostrf(powerFActor2, 4, 2, pF2);
  dtostrf(supplyVoltage2, 6, 2, sV2);
  dtostrf(Irms2, 5, 3, Ir2);  
  dtostrf(realPower3, 5, 2, rP3);
  dtostrf(apparentPower3, 5, 2, aP3);
  dtostrf(powerFActor3, 4, 2, pF3);
  dtostrf(supplyVoltage3, 6, 2, sV3);
  dtostrf(Irms3, 5, 3, Ir3);
}

//   ENVIA OS DADOS  // POSSUI ERRO
void requestEvent() {
        Wire.write(rP1); 
//        Wire.write(aP1); 
        Wire.write(pF1); 
//        Wire.write(sV1); 
//        Wire.write(Ir1); 
//        Wire.write(rP2); 
//        Wire.write(aP2); 
//        Wire.write(pF2); 
//        Wire.write(sV2); 
//        Wire.write(Ir2); 
//        Wire.write(rP3); 
//        Wire.write(aP3); 
//        Wire.write(pF3); 
//        Wire.write(sV3); 
//        Wire.write(Ir3);
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
  Wire.begin(0x01);                
  Wire.onRequest(requestEvent); 

// INICIALIZA A PORTA SERIAL
//  Serial.begin(9600);

//   INICIALIZA OS SENSORES   //
  emon1.current(SensorCorrente_1,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon1.voltage(SensorTensao_1,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
  emon2.current(SensorCorrente_2,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon2.voltage(SensorTensao_2,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
  emon3.current(SensorCorrente_3,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon3.voltage(SensorTensao_3,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
}

void loop() {

//    MEDIDOR DE ENERGIA    //
  emon1.calcVI(20,2000);
//  emon2.calcVI(20,2000);
//  emon3.calcVI(20,2000);

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

  prepara_dado();
  delay(100);
}

