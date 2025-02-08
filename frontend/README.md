<Box
      sx={{
        width: '100%',
        display: 'grid',
        padding:5,
        backgroundColor:'#FDC000',
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