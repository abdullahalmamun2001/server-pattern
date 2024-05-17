

export type UserName = {
  name: {
    firstName:{
        type:string,
        required:true;
    },
    lastName:{
        type:string,
        required:true;
    },
  }
};

export type userPersonalInfo = {
  address: string;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth: { type: string; required: true };
  isActive: 'active' | 'blocked';
  height?: number;
  bloodGroup: ' A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
};

export type userGurdianInfo = {
  fathersName: { type: string; required: true };
  fathersPhone: { type: string; required: true };
  fathersOccapation: string;
  mothersName: { type: string; required: true };
  mothersPhone?: string;
  mothersOccapation?: string;
};

export type Student = {
  id: string;
  name: UserName;
  personalInfo: userPersonalInfo;
  gurdianInfo: userGurdianInfo;
};
