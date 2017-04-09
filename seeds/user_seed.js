exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('user').del()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
          {
            id: 1,
            name: 'Andrew Yi',
            email: 'a@a.com',
            auth0_id: 'adssa',
            location_id: 1,
            profile_img: 'http://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125',
            github_url: 'https://github.com/andrewjyi',
            linkedin_url: 'https://www.linkedin.com/in/josh-hickman-3b6a2051/'
          },
          {
            id: 2,
            name: 'Josh Hickman',
            email: 'j@j.com',
            auth0_id: 'asdas',
            location_id: 1,
            profile_img: 'https://avatars2.githubusercontent.com/u/15853188?v=3',
            github_url: 'https://github.com/Jahosh',
            linkedin_url: 'https://www.linkedin.com/in/josh-hickman-3b6a2051/'

          },
          {
            id: 3,
            name: 'Sandra J',
            email: 's@s.com',
            auth0_id: 'asdas',
            location_id: 2,
            profile_img: 'http://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125',
            github_url: 'https://github.com/hesandra',
            linkedin_url: 'https://www.linkedin.com/in/josh-hickman-3b6a2051/'
          },
          {
            id: 4,
            name: 'Superman',
            email: 's@s.com',
            auth0_id: '123123123',
            location_id: 3,
            profile_img: 'http://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125',
            github_url: 'https://github.com/superman',
            linkedin_url: 'https://www.linkedin.com/in/superman/'
          }
        ]);
      });
  })
};