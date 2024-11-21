const services = [
    { id: 1, name: 'HR Consultancy' },
    { id: 2, name: 'Study Abroad' },
    { id: 3, name: 'Visa Services' },
    { id: 4, name: 'Flight Ticketing' },
    { id: 5, name: 'Umrah Packages' },
  ];
  
  export const fetchServices = (): Promise<{ id: number; name: string }[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(services);
      }, 1000); 
    });
  };
  