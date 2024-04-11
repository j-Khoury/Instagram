export type UserData = {
  id: number;
  name: string;
  username: string;
  profile: any;
  story: {
    time: number;
    image: any;
  };
  post: {
    time: string;
    date: string;
    image: any;
    caption: string;
    like: number;
  };
  postType: 'post' | 'story';
}[];

export const UserData: UserData = [
  {
    id: 1,
    name: 'Lebron James',
    username: 'James',
    profile: require('../assets/data/lebron.png'),
    story: {
      time: 10,
      image: require('../assets/data/lakers.png'),
    },
    post: {
      time: '09:00:00',
      date: '01/05/2023',
      image: require('../assets/data/lebron.png'),
      caption: 'Hi Everyone, Lebron is here',
      like: 30,
    },
    postType: 'post',
  },
  {
    id: 2,
    name: 'Stephen Curry',
    username: 'Curry',
    profile: require('../assets/data/steph.png'),
    story: {
      time: 8,
      image: require('../assets/data/curry.png'),
    },
    post: {
      time: '04:00 PM',
      date: '08/04/2023',
      image: require('../assets/data/steph.png'),
      caption: 'Champs....',
      like: 25,
    },
    postType: 'post',
  },
  {
    id: 3,
    name: 'James Harden',
    username: 'Harden',
    profile: require('../assets/data/harden.png'),
    story: {
      time: 15,
      image: require('../assets/data/harden2.png'),
    },
    post: {
      time: '07:00 AM',
      date: '12/05/2023',
      image: require('../assets/data/harden.png'),
      caption: 'James Harden is finally here..',
      like: 99,
    },
    postType: 'post',
  },
  {
    id: 4,
    name: 'Luka Doncic',
    username: 'Luka',
    profile: require('../assets/data/luka.png'),
    story: {
      time: 13,
      image: require('../assets/data/luka2.png'),
    },
    post: {
      time: '07:00 AM',
      date: '12/05/2023',
      image: require('../assets/data/luka.png'),
      caption: 'Hi Everyone, Luka is here..',
      like: 88,
    },
    postType: 'post',
  },
];

export const typeData: {id: number; image: any}[] = [
  {id: 1, image: require('../assets/icon/GridIcon.png')},
  {id: 2, image: require('../assets/icon/TagsIcon.png')},
];
