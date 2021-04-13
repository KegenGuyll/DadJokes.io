export type Joke = {
  _id: string;
  type: string;
  setup: string;
  punchline: string;
  likes: Array<UserLikeInformation>;
  author: {
    name: string;
    id: string;
  };
  date: string;
  approved: boolean;
};

export type JokeBody = {
  success: boolean;
  body: Joke[];
};

export type UserLikeInformation = {
  id: string;
  displayName: string;
};

export type JokeByID = {
  success: boolean;
  body: Joke;
};
