export type Actor = {
  id: number;
  name: string | null;
  enName: string | null;
  photo: string | null;
  sex: string | null;
  growth: number | null;
  birthday: string | null;
  age: number | null;
  facts: [
    {
      value: string;
    },
  ];
  movies: [
    {
      id: number;
      name: string | null;
      rating: number | null;
      general: boolean | null;
    },
  ];
};

export const isActor = (obj: any): obj is Actor => {
  return obj && typeof obj === "object" && obj.id;
};
