export type User = {
  name?: string;
  email: string;
  photoUrl: string;
  displayName: string;
  likes: Array<string>;
  posts: Array<string>;
  bio: string;
};

export type UserBody = {
  success: boolean;
  body: User;
};

export type PrivateUser = {
  success: boolean;
  body: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    sessionToken: string;
    photoUrl: string;
    displayName: string;
    likes: Array<string>;
    posts: Array<string>;
    admin: boolean;
    bio: string;
  };
};
