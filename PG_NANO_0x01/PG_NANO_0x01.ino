#include <Wire.h>
#include <EmonLib.h>

//    DECLARA OS MEDIDORES   //
EnergyMonitor emon1;
EnergyMonitor emon2;
EnergyMonitor emon3;

//   FLAG GLOBAL   //
boolean flag_envio = false;

//   DECLARA MENSAGEM   //
String dados_arduino;

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

//    ORGANIZA OS DADOS MEDIDOS    //
void prepara_dado(double rP, double aP, double pF, double sV, double Ir){
  dtostrf(rP, 5, 2, rP1);
  dtostrf(aP, 5, 2, aP1);
  dtostrf(pF, 4, 2, pF1);
  dtostrf(sV, 6, 2, sV1);
  dtostrf(Ir, 5, 3, Ir1);
  dados_arduino += rP1;
  dados_arduino += ", ";
  dados_arduino += aP1;
  dados_arduino += ", ";
  dados_arduino += pF1;
  dados_arduino += ", ";
  dados_arduino += sV1;
  dados_arduino += ", ";
  dados_arduino += Ir1;
  dados_arduino += ", ";
}

//   ENVIA OS DADOS  //
void requestEvent() {
    if(flag_envio == true){ 
        Wire.write(dados_arduino);
        dados_arduino = "";
        flag_envio = false;
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
  Wire.begin(0x01);                
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

//    MEDIDOR DE ENERGIA    //
  emon1.calcVI(20,2000);
  emon2.calcVI(20,2000);
  emon3.calcVI(20,2000);

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

  prepara_dado(realPower1,apparentPower1,powerFActor1,supplyVoltage1,Irms1);
  prepara_dado(realPower2,apparentPower2,powerFActor2,supplyVoltage2,Irms2);
  prepara_dado(realPower3,apparentPower3,powerFActor3,supplyVoltage3,Irms3);
  flag_envio = true; // STRING PRONTA PARA ENVIO

  delay(100);
}

