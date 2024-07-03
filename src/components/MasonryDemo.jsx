import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function MasonryDemo() {
  return (
    <Box sx={{ maxwidth: "100%",}}>
      <Masonry columns={{ xs: 2, sm: 3, md: 3 }} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'src/assets/Rectangle 12.png',
    title: 'Fern',
  },
  {
    img: 'src/assets/image 15.png',
    title: 'Snacks',
  },
  {
    img: 'src/assets/image 16.png',
    title: 'Mushrooms',
  },
  {
    img: 'src/assets/image 17.png',
    title: 'Mushrooms',
  },
  {
    img: 'src/assets/image 18.png',
    title: 'Mushrooms',
  },
];
