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
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        padding:5,
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
  );
}

export default SelectActionCard;
