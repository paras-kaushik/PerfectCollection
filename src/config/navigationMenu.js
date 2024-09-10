export const navigation = {
    categories: [
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://res.cloudinary.com/dq0bgjjxp/image/upload/v1725726293/IMG_20240907_17172049_bemcdl.png',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
            href:'/men/clothing/mens_kurta'
          },
          {
            name: 'Premimum Kurtas',
            id: '#',
            imageSrc: 'https://res.cloudinary.com/dq0bgjjxp/image/upload/v1725779589/IMG_20240907_17222776_sfnosr.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
            href:'/men/clothing/mens_kurta'
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' }
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Kurtas', href: '/men/clothing/mens_kurta' },
      { name: 'About Us', href: '/about' },
      
    ],
  }