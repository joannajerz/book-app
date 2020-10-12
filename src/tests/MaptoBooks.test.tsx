import mapToBooks from '../components/maptoBooks';

it('mapToBooks is okey', () => {

  expect(mapToBooks(
      [{
        id: '234',
        volumeInfo: {
            description: "some description",
            title: 'harry',
            imageLinks:{
                thumbnail: 'www.image.pl'
            }
        },
     }]))
    .toEqual(
        [{ title: 'harry',
         id: '234',
         description: "some description",
         image: 'www.image.pl'}]);

    expect(mapToBooks(
        [{
            id: '234',
            volumeInfo: {
                title: 'harry',
                imageLinks:{
                    thumbnail: 'www.image.pl'
                }
            },
         }]))
        .toEqual(
            [{ title: 'harry',
                description:"brak opisu",
            id: '234',
            image: 'www.image.pl'
    }]);
    expect(mapToBooks(
        [{
          id: '234',
          volumeInfo: {
              description: "some description",
              title: 'harry',
              
          },
       }]))
      .toEqual(
          [{ title: 'harry',
           id: '234',
           description: "some description",
           image: "https://i.ibb.co/vwY2Zhc/600px-No-image-available-svg.png"}]);
});
