export interface Video {
  video: any;
  postProfile: any;
  title: string;
  description: string;
  likes: string;
  isLike: boolean;
}

export const videoData: Video[] = [
  {
    video: require('../assets/reels/vid1.mp4'),
    postProfile: require('../assets/data/lebron.png'),
    title: 'Lebron_James',
    description: 'Lebron Wins His Frist Ring',
    likes: '10k',
    isLike: false,
  },
  {
    video: require('../assets/reels/vid2.mp4'),
    postProfile: require('../assets/data/harden.png'),
    title: 'The_Groot',
    description: "It's tea time",
    likes: '2k',
    isLike: false,
  },
  {
    video: require('../assets/reels/vid3.mp4'),
    postProfile: require('../assets/data/harden.png'),
    title: 'loverland',
    description: 'Who DID IT BEST ?',
    likes: '3k',
    isLike: false,
  },
  {
    video: require('../assets/reels/vid4.mp4'),
    postProfile: require('../assets/data/harden.png'),
    title: 'Shooting_Time',
    description: 'THE MOST SATISYING FEELING..',
    likes: '5k',
    isLike: false,
  },
];
