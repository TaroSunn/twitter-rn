export type User = {
  id: string;
  username: string;
  image?: string;
  name: string;
};

export type TweetType = {
  id: string;
  content: string;
  user: User;
  createdAt: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
};
