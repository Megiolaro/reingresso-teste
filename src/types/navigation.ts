// src/types/navigation.ts
export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Home: undefined;   // Rota "Home" não espera parâmetros
    Tickets: undefined;  // Rota "Tickets" não espera parâmetros
    Account: undefined;  // Rota "Account" não espera parâmetros
    Details: { ticket: Ticket }; // Rota "Details" espera um parâmetro 'ticket'
  };
  
export type Ticket = {
    date: string;
    title: string;
    location: string;
    price: string;
  };
  