export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Home: undefined; 
    Tickets: undefined;  
    Account: undefined;  
    Details: { ticket: Ticket };
  };
  
export type Ticket = {
    date: string;
    title: string;
    location: string;
    price: string;
  };
  