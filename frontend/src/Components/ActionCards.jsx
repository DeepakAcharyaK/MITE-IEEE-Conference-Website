import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  { id: 1, title: 'Chief Patron', theme: '#FFEBEE' },  // Light Red  
  { id: 2, title: 'Patrons', theme: '#FFF3E0' },  // Light Orange  
  { id: 3, title: 'Conference Chairs', theme: '#FFF9C4' },  // Light Yellow  
  { id: 4, title: 'Program Chairs', theme: '#E8F5E9' },  // Light Green  
  { id: 5, title: 'Technical Program Chairs', theme: '#E3F2FD' },  // Light Blue  
  { id: 6, title: 'Finance Chairs', theme: '#E1F5FE' },  // Light Sky Blue  
  { id: 7, title: 'Publication Chairs', theme: '#E0F7FA' },  // Light Cyan  
  { id: 8, title: 'Sponsorship Chairs', theme: '#F1F8E9' },  // Light Lime  
  { id: 9, title: 'Publicity and Media Chairs', theme: '#FCE4EC' },  // Light Pink  
  { id: 10, title: 'Organizing Committee', theme: '#F3E5F5' },  // Light Purple  
  { id: 11, title: 'Advisory Committee', theme: '#EDE7F6' },  // Light Lavender  
  { id: 12, title: 'Website Chairs', theme: '#E8EAF6' },  // Light Indigo  
  { id: 13, title: 'Conference Convenors', theme: '#FBE9E7' },  // Light Peach  
  { id: 14, title: 'Session Management', theme: '#ECEFF1' },  // Light Gray  
  { id: 15, title: 'Hospitality', theme: '#FFFDE7' },  // Light Pastel Yellow  
  { id: 16, title: 'Transportation', theme: '#F9FBE7' },  // Light Olive  
  { id: 17, title: 'Registration Committee', theme: '#FFFAF0' }  // Light Cream  
];




function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ec413b" fill-opacity="1" d="M0,192L24,192C48,192,96,192,144,202.7C192,213,240,235,288,234.7C336,235,384,213,432,181.3C480,149,528,107,576,117.3C624,128,672,192,720,202.7C768,213,816,171,864,154.7C912,139,960,149,1008,154.7C1056,160,1104,160,1152,160C1200,160,1248,160,1296,170.7C1344,181,1392,203,1416,213.3L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>


      <Box
      sx={{
        width: '100%',
        display: 'grid',
        padding:5,
        backgroundColor:'#ec413b',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      <Typography>Committee</Typography>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%', backgroundColor:`${card.theme}` }}>
              <Typography variant="p" fontWeight={500} component="div">
                {card.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </>
  );
}

export default SelectActionCard;
