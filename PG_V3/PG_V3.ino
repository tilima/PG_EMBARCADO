//    LEMBRAR DE TROCAR O COMANDO DELAY POR MILLIS PARA EVITAR INTERRUPÇÃO NO CÓDIGO    //
 
//    BIBLIOTECAS   //
#include <SPI.h>
#include <Ethernet.h>
#include <Wire.h>
#include <EmonLib.h>

//    MEDIDOR 1   //
EnergyMonitor emon1;
float antigo_realPower1 = 0;
float realPower1;  
float apparentPower1;    
float powerFActor1;      
float supplyVoltage1;             
float Irms1;

//    MEDIDOR 2   //
float antigo_realPower2 = 0;
float realPower2;  
float apparentPower2;    
float powerFActor2;      
float supplyVoltage2;             
float Irms2;

//    MEDIDOR 3   //
float antigo_realPower3 = 0;
float realPower3;  
float apparentPower3;    
float powerFActor3;      
float supplyVoltage3;             
float Irms3;

//    MEDIDOR 4   //
float antigo_realPower4 = 0;
float realPower4;  
float apparentPower4;    
float powerFActor4;      
float supplyVoltage4;             
float Irms4;

//    MEDIDOR 5   //
float antigo_realPower5 = 0;
float realPower5;  
float apparentPower5;    
float powerFActor5;      
float supplyVoltage5;             
float Irms5;

//    MEDIDOR 6   //
float antigo_realPower6 = 0;
float realPower6;  
float apparentPower6;    
float powerFActor6;      
float supplyVoltage6;             
float Irms6;

//    MEDIDOR 7   //
float antigo_realPower7 = 0;
float realPower7;  
float apparentPower7;    
float powerFActor7;      
float supplyVoltage7;             
float Irms7;

//    MEDIDOR 8   //
float antigo_realPower8 = 0;
float realPower8;  
float apparentPower8;    
float powerFActor8;      
float supplyVoltage8;             
float Irms8;

//    MEDIDOR 9   //
float antigo_realPower9 = 0;
float realPower9;  
float apparentPower9;    
float powerFActor9;      
float supplyVoltage9;             
float Irms9;

//    MEDIDOR 10   //
float antigo_realPower10 = 0;
float realPower10;  
float apparentPower10;    
float powerFActor10;      
float supplyVoltage10;             
float Irms10;

//    TOTAIS    //
float realPowert;  
float apparentPowert;    
float powerFActort;      
float supplyVoltaget;             
float Irmst;

//    SENSORES   //
const int SensorCorrente_1 = A8;
const int SensorTensao_1 = A9;

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
char mensagem;
String dados;
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

//    TOTAIS    //
void totais(){
  
  int quo = 0;
  
  if (Irms1 >= 0.030) { quo++; }
  if (Irms2 >= 0.030) { quo++; }
  if (Irms3 >= 0.030) { quo++; }
  if (Irms4 >= 0.030) { quo++; }
  if (Irms5 >= 0.030) { quo++; }
  if (Irms6 >= 0.030) { quo++; }
  if (Irms7 >= 0.030) { quo++; }
  if (Irms8 >= 0.030) { quo++; }
  if (Irms9 >= 0.030) { quo++; }
  if (Irms10 >= 0.030) { quo++; }
  Serial.println(quo);
  Serial.println(realPower1);
  Serial.println(realPower2);
  Serial.println(realPower3);
  Serial.println(realPower4);
  Serial.println(realPower5);
  Serial.println(realPower6);
  Serial.println(realPower7);
  Serial.println(realPower8);
  Serial.println(realPower9);
  Serial.println(realPower10);
  realPowert = (realPower1 + realPower2 + realPower3 + realPower4 + realPower5 + realPower6 + realPower7 + realPower8 + realPower9 + realPower10);
  Serial.println(realPowert);
  apparentPowert = (apparentPower1 + apparentPower2 + apparentPower3 + apparentPower4 + apparentPower5 + apparentPower6 + apparentPower7 + apparentPower8 + apparentPower9 + apparentPower10);
  powerFActort = (powerFActor1 + powerFActor2 + powerFActor3 + powerFActor4 + powerFActor5 + powerFActor6 + powerFActor7 + powerFActor8 + powerFActor9 + powerFActor10)/10;
  supplyVoltaget = (supplyVoltage1 + supplyVoltage2 + supplyVoltage3 + supplyVoltage4 + supplyVoltage5 + supplyVoltage6 + supplyVoltage7 + supplyVoltage8 + supplyVoltage9 + supplyVoltage10)/10;
  Irmst = (Irms1 + Irms2 + Irms3 + Irms4 + Irms5 + Irms6 + Irms7 + Irms8 + Irms9 + Irms10);
}

//    MENSURAR AS GRANDEZAS    //
void medir(){
  emon1.calcVI(20,2000);
  //emon1.serialprint();
   //    MEDIDOR 01    //
  realPower1       = emon1.realPower;        
  apparentPower1   = emon1.apparentPower;    
  powerFActor1     = emon1.powerFactor;      
  supplyVoltage1   = emon1.Vrms;             
  Irms1            = emon1.Irms;
}

//    PREPARA OS DADOS PARA O XML    //
void subString_para_float(int alterna){
  int ind1;
  int ind2;
  int ind3;
  int ind4;
  int ind5;
  
  switch (alterna){
    case 1:
      if(antigo_realPower1 == 0){
        antigo_realPower1 = realPower1;
      } else {
        realPower1 += antigo_realPower1;
        realPower1 /= 2;
        antigo_realPower1 = realPower1;
      }

      ind1 = dados_arduino_0X01_01.indexOf(",");
      realPower2 = dados_arduino_0X01_01.substring(0, ind1).toFloat();
      if(antigo_realPower2 == 0){
        antigo_realPower2 = realPower2;
      } else {
        realPower2 += antigo_realPower2;
        realPower2 /= 2;
        antigo_realPower2 = realPower2;
      }
      ind2 = dados_arduino_0X01_01.indexOf(",", ind1 + 1);
      apparentPower2 = dados_arduino_0X01_01.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X01_01.indexOf(",", ind2 + 1);
      powerFActor2 = dados_arduino_0X01_01.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X01_01.indexOf(",", ind3 + 1);
      supplyVoltage2 = dados_arduino_0X01_01.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X01_01.indexOf(",", ind4 + 1);
      Irms2 = dados_arduino_0X01_01.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X01_02.indexOf(",");
      realPower3 = dados_arduino_0X01_02.substring(0, ind1).toFloat();
      
      if(antigo_realPower3 == 0){
        antigo_realPower3 = realPower3;
      } else {
        realPower3 += antigo_realPower3;
        realPower3 /= 2;
        antigo_realPower3 = realPower3;
      }
      ind2 = dados_arduino_0X01_02.indexOf(",", ind1 + 1);
      apparentPower3 = dados_arduino_0X01_02.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X01_02.indexOf(",", ind2 + 1);
      powerFActor3 = dados_arduino_0X01_02.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X01_02.indexOf(",", ind3 + 1);
      supplyVoltage3 = dados_arduino_0X01_02.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X01_02.indexOf(",", ind4 + 1);
      Irms3 = dados_arduino_0X01_02.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X01_03.indexOf(",");
      realPower4 = dados_arduino_0X01_03.substring(0, ind1).toFloat();
      if(antigo_realPower4 == 0){
        antigo_realPower4 = realPower4;
      } else {
        realPower4 += antigo_realPower4;
        realPower4 /= 2;
        antigo_realPower4 = realPower4;
      }
      ind2 = dados_arduino_0X01_03.indexOf(",", ind1 + 1);
      apparentPower4 = dados_arduino_0X01_03.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X01_03.indexOf(",", ind2 + 1);
      powerFActor4 = dados_arduino_0X01_03.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X01_03.indexOf(",", ind3 + 1);
      supplyVoltage4 = dados_arduino_0X01_03.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X01_03.indexOf(",", ind4 + 1);
      Irms4 = dados_arduino_0X01_03.substring(ind4 + 1, ind5).toFloat();

      break;
    
    case 2:

      ind1 = dados_arduino_0X02_01.indexOf(",");
      realPower5 = dados_arduino_0X02_01.substring(0, ind1).toFloat();
      if(antigo_realPower5 == 0){
        antigo_realPower5 = realPower5;
      } else {
        realPower5 += antigo_realPower5;
        realPower5 /= 2;
        antigo_realPower5 = realPower5;
      }
      ind2 = dados_arduino_0X02_01.indexOf(",", ind1 + 1);
      apparentPower5 = dados_arduino_0X02_01.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X02_01.indexOf(",", ind2 + 1);
      powerFActor5 = dados_arduino_0X02_01.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X02_01.indexOf(",", ind3 + 1);
      supplyVoltage5 = dados_arduino_0X02_01.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X02_01.indexOf(",", ind4 + 1);
      Irms5 = dados_arduino_0X02_01.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X02_02.indexOf(",");
      realPower6 = dados_arduino_0X02_02.substring(0, ind1).toFloat();
      if(antigo_realPower6 == 0){
        antigo_realPower6 = realPower6;
      } else {
        realPower6 += antigo_realPower6;
        realPower6 /= 2;
        antigo_realPower6 = realPower6;
      }
      ind2 = dados_arduino_0X02_02.indexOf(",", ind1 + 1);
      apparentPower6 = dados_arduino_0X02_02.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X02_02.indexOf(",", ind2 + 1);
      powerFActor6 = dados_arduino_0X02_02.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X02_02.indexOf(",", ind3 + 1);
      supplyVoltage6 = dados_arduino_0X02_02.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X02_02.indexOf(",", ind4 + 1);
      Irms6 = dados_arduino_0X02_02.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X02_03.indexOf(",");
      realPower7 = dados_arduino_0X02_03.substring(0, ind1).toFloat();
      if(antigo_realPower7 == 0){
        antigo_realPower7 = realPower7;
      } else {
        realPower7 += antigo_realPower7;
        realPower7 /= 2;
        antigo_realPower7 = realPower7;
      }
      ind2 = dados_arduino_0X02_03.indexOf(",", ind1 + 1);
      apparentPower7 = dados_arduino_0X02_03.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X02_03.indexOf(",", ind2 + 1);
      powerFActor7 = dados_arduino_0X02_03.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X02_03.indexOf(",", ind3 + 1);
      supplyVoltage7 = dados_arduino_0X02_03.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X02_03.indexOf(",", ind4 + 1);
      Irms7 = dados_arduino_0X02_03.substring(ind4 + 1, ind5).toFloat();
    
      break;
    
    case 3:

      ind1 = dados_arduino_0X03_01.indexOf(",");
      realPower8 = dados_arduino_0X03_01.substring(0, ind1).toFloat();
      if(antigo_realPower8 == 0){
        antigo_realPower8 = realPower8;
      } else {
        realPower8 += antigo_realPower8;
        realPower8 /= 2;
        antigo_realPower8 = realPower8;
      }
      ind2 = dados_arduino_0X03_01.indexOf(",", ind1 + 1);
      apparentPower8 = dados_arduino_0X03_01.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X03_01.indexOf(",", ind2 + 1);
      powerFActor8 = dados_arduino_0X03_01.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X03_01.indexOf(",", ind3 + 1);
      supplyVoltage8 = dados_arduino_0X03_01.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X03_01.indexOf(",", ind4 + 1);
      Irms8 = dados_arduino_0X03_01.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X03_02.indexOf(",");
      realPower9 = dados_arduino_0X03_02.substring(0, ind1).toFloat();
      if(antigo_realPower9 == 0){
        antigo_realPower9 = realPower9;
      } else {
        realPower9 += antigo_realPower9;
        realPower9 /= 2;
        antigo_realPower9 = realPower9;
      }
      ind2 = dados_arduino_0X03_02.indexOf(",", ind1 + 1);
      apparentPower9 = dados_arduino_0X03_02.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X03_02.indexOf(",", ind2 + 1);
      powerFActor9 = dados_arduino_0X03_02.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X03_02.indexOf(",", ind3 + 1);
      supplyVoltage9 = dados_arduino_0X03_02.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X03_02.indexOf(",", ind4 + 1);
      Irms9 = dados_arduino_0X03_02.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X03_03.indexOf(",");
      realPower10 = dados_arduino_0X03_03.substring(0, ind1).toFloat();
      if(antigo_realPower10 == 0){
        antigo_realPower10 = realPower10;
      } else {
        realPower10 += antigo_realPower10;
        realPower10 /= 2;
        antigo_realPower10 = realPower10;
      }
      ind2 = dados_arduino_0X03_03.indexOf(",", ind1 + 1);
      apparentPower10 = dados_arduino_0X03_03.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X03_03.indexOf(",", ind2 + 1);
      powerFActor10 = dados_arduino_0X03_03.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X03_03.indexOf(",", ind3 + 1);
      supplyVoltage10 = dados_arduino_0X03_03.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X03_03.indexOf(",", ind4 + 1);
      Irms10 = dados_arduino_0X03_03.substring(ind4 + 1, ind5).toFloat();

      break;
  }
}

//    RECEBE AS MENSAGENS    //
void recebe_dados(){
  
  recebe_tamanho(arduino_01);
  dados_arduino_0X01_01 = recebe_escravo_1(arduino_01);
  dados = "";
  dados_arduino_0X01_02 = recebe_escravo_2(arduino_01);
  dados = "";
  dados_arduino_0X01_03 = recebe_escravo_3(arduino_01);
  dados = "";

  recebe_tamanho(arduino_02);
  dados_arduino_0X02_01 = recebe_escravo_1(arduino_02);
  dados = "";
  dados_arduino_0X02_02 = recebe_escravo_2(arduino_02);
  dados = "";
  dados_arduino_0X02_03 = recebe_escravo_3(arduino_02);
  dados = "";

  recebe_tamanho(arduino_03);
  dados_arduino_0X03_01 = recebe_escravo_1(arduino_03);
  dados = "";
  dados_arduino_0X03_02 = recebe_escravo_2(arduino_03);
  dados = "";
  dados_arduino_0X03_03 = recebe_escravo_3(arduino_03);
  dados = "";
  //Serial.println(dados_arduino_0X03_03);
  Serial.println();  
}

//    LIMPAR MENSAGENS    //
void limpar_string(){
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
  }
  return dados;  
}

// MAC address from Ethernet shield sticker under board
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192, 168, 42, 115); // IP address, may need to change depending on network
EthernetServer server(80);  // create a server at port 80

void exec_ethernet(){
  EthernetClient client = server.available();
  if(client)
  {
    boolean continua = true;
    String linha = "";

    while(client.connected())
    {
      if(client.available()){
        char c = client.read();
        linha.concat(c);
  
        if(c == '\n' && continua)
        {
          client.println("HTTP/1.1 200 OK");
          // IMPORTANTE, ISSO FAZ O ARDUINO RECEBER REQUISIÇÃO AJAX DE OUTRO SERVIDOR E NÃO APENAS LOCAL.
          client.println("Content-Type: text/javascript");
          client.println("Access-Control-Allow-Origin: *");
          client.println();          

          client.print("dados({ dados_arduino: { medidores: { medidor_1 : { Potencia_Ativa : ");
          client.print(realPower1);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower1);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor1);
          client.print(", Tensao : ");
          client.print(supplyVoltage1);
          client.print(", Corrente :");
          client.print(Irms1);
          client.print("}, medidor_2 : { Potencia_Ativa : ");
          client.print(realPower2);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower2);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor2);
          client.print(", Tensao : ");
          client.print(supplyVoltage2);
          client.print(", Corrente :");
          client.print(Irms2);
          client.print("}, medidor_3 : { Potencia_Ativa : ");
          client.print(realPower3);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower3);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor3);
          client.print(", Tensao : ");
          client.print(supplyVoltage3);
          client.print(", Corrente :");
          client.print(Irms3);
          client.print("}, medidor_4 : { Potencia_Ativa : ");
          client.print(realPower4);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower4);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor4);
          client.print(", Tensao : ");
          client.print(supplyVoltage4);
          client.print(", Corrente :");
          client.print(Irms4);
          client.print("}, medidor_5 : { Potencia_Ativa : ");
          client.print(realPower5);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower5);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor5);
          client.print(", Tensao : ");
          client.print(supplyVoltage5);
          client.print(", Corrente :");
          client.print(Irms5);
          client.print("}, medidor_6 : { Potencia_Ativa : ");
          client.print(realPower6);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower6);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor6);
          client.print(", Tensao : ");
          client.print(supplyVoltage6);
          client.print(", Corrente :");
          client.print(Irms6);
          client.print("}, medidor_7 : { Potencia_Ativa : ");
          client.print(realPower7);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower7);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor7);
          client.print(", Tensao : ");
          client.print(supplyVoltage7);
          client.print(", Corrente :");
          client.print(Irms7);
          client.print("}, medidor_8 : { Potencia_Ativa : ");
          client.print(realPower8);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower8);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor8);
          client.print(", Tensao : ");
          client.print(supplyVoltage8);
          client.print(", Corrente :");
          client.print(Irms8);
          client.print("}, medidor_9 : { Potencia_Ativa : ");
          client.print(realPower9);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower9);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor9);
          client.print(", Tensao : ");
          client.print(supplyVoltage9);
          client.print(", Corrente :");
          client.print(Irms9);
          client.print("}, medidor_10 : { Potencia_Ativa : ");
          client.print(realPower10);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPower10);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActor10);
          client.print(", Tensao : ");
          client.print(supplyVoltage10);
          client.print(", Corrente :");
          client.print(Irms10);
          client.print("}, total : { Potencia_Ativa : ");
          client.print(realPowert);
          client.print(", Potencia_Aparente : ");
          client.print(apparentPowert);
          client.print(", Fator_de_potencia : ");
          client.print(powerFActort);
          client.print(", Tensao : ");
          client.print(supplyVoltaget);
          client.print(", Corrente :");
          client.print(Irmst);
          client.print("}}, medias : { medidor_1 : { Potencia_Ativa : ");
          client.print(realPower1);
          client.print("}, medidor_2 : { Potencia_Ativa :");
          client.print(realPower2);
          client.print("}, medidor_3 : { Potencia_Ativa :");
          client.print(realPower3);
          client.print("}, medidor_4 : { Potencia_Ativa :");
          client.print(realPower4);
          client.print("}, medidor_5 : { Potencia_Ativa :");
          client.print(realPower5);
          client.print("}, medidor_6 : { Potencia_Ativa :");
          client.print(realPower6);
          client.print("}, medidor_7 : { Potencia_Ativa :");
          client.print(realPower7);
          client.print("}, medidor_8 : { Potencia_Ativa :");
          client.print(realPower8);
          client.print("}, medidor_9 : { Potencia_Ativa :");
          client.print(realPower9);
          client.print("}, medidor_10 : { Potencia_Ativa :");
          client.print(realPower10);
          client.print("}, total : { Potencia_Ativa :");
          client.print(realPowert);
          client.print("}}}})");
           
        break;
        }
        if(c == '\n') { continua = true; }
        else if (c != '\r') { continua = false; }
      }
    }
     delay(1);
     client.stop();
  }
}  

//INCIALIZAÇÃO// 
void setup() {
  
  //    PINOS ANALÓGICOS    //
  pinMode(A8,INPUT);
  pinMode(A9,INPUT);
  
  //    BIBLIOTECAS   //
  Wire.begin();  
  Serial.begin(9600);
  Ethernet.begin(mac, ip);  // initialize Ethernet device
  server.begin();           // start to listen for clients

  //    MEDIDORES   //
  emon1.current(SensorCorrente_1,1.135); // (PINO,GANHO/CALIBRAÇÃO)
  emon1.voltage(SensorTensao_1,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
}

//LOOP// 
void loop() {

  //    RELÉS   //
  
  //    SERVIDOR    //
  exec_ethernet();

  //    MEDIDOR DE ENERGIA    //
  medir();
  recebe_dados();
  
  //    EXTRAI OS DADOS DAS STRINGS    //
  subString_para_float(1);
  subString_para_float(2);
  subString_para_float(3);
  totais();
  Serial.println("");
  //    REINICIAR AS MENSAGENS    //
  limpar_string();
}