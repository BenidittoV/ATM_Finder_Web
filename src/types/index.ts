export interface ATM {
  id: string;
  bankName: string;
  bankLogo: string;
  location: string;
  fullAddress: string;
  cashStatus: 'available' | 'low' | 'empty';
  crowdStatus: 'sepi' | 'sedang' | 'ramai';
  operatingHours: string;
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
}

export interface Bank {
  id: string;
  name: string;
  logo: string;
  color: string;
}