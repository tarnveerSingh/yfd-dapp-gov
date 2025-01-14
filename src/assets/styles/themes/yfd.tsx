const base = {
  body: {
    bg: 'rgba(36, 39, 59, 0.8)'
  },
  fonts: {
    heading: 'Kodchasan, sans-serif',
    body: 'Poppins, sans-serif',
    mono: 'Roboto Mono, monospace'
  },
  colors: {
    color1: '#040307',
    color2: '#D8552A', // orange
    color3: '#D7B9A3',
    color4: '#FCFEFF',
    color5: '#1F43BF',
    color6: 'rgba(255, 255, 255, 0.8)',
    color7: '#1F43BF'
  },
  background: {
    color1: 'rgba(206,188,155,1)',
    color2: 'rgba(85,63,50,1)',
    color3: 'rgba(42,31,25,1)',
    color4: ''
  },
  scrollbar: {
    color1: '#040307',
    colorTrack: '#202833',
    width: '16px',
    borderRadius: '10px',
    thumbColor1: '#DA5F37',
    thumbColor2: '#805446',
    thumbBorderColor: '#202833'
  },
  header: {
    backgroundColor: 'rgba(4, 3, 7, 0.5)'
  },
  sectionTitle: {
    textColor: '#D7B9A3',
    textShadowColor1: '#000',
    textShadowColor2: 'gray',
    textShadowColor3: '#333'
  }
};

const extended = {
  ...base,
  layerStyles: {
    stakeYFD: {
      color: 'white',
      padding: '10px'
    },
    stakeItemCard: {
      bg: 'color5'
    },
    emergencyVote: {},
    accordionWrapper: {},
    accordionButton: {
      borderWidth: '0'
    },
    accordionHeader: {
      borderRadius: 'lg',
      bgGradient: 'linear(to-t, rgba(22, 25, 37, 0.7), rgba(42, 46, 60, 0.5))'
    },
    accordionProposalItem: {
      borderStyle: 'solid',
      borderRadius: 'lg',
      boxShadow: 'dark-lg',
      marginTop: '3',
      padding: '0',
      overflow: 'hidden'
    },
    accordionProposalPanel: {},
    accordionEmergencyItem: {},
    accordionEmergencyPanel: {},
    fundingInfo: {}
  },
  textStyles: {
    pageBody: {
      color: 'black'
    },
    voteStatus: {
      color: 'gray.400'
    }
  },
  colors: {
    ...base.colors,
    color5: 'linear-gradient(180deg, yellow.300 0%, yellow.100 100%);',
    color7: 'linear-gradient(180deg, #885555 0%, #D8552A 80%);'
  },
  background: {
    ...base.background,
    listBackground1:
      'linear-gradient(180deg, gray.50 0%, gray.150 50%, gray.300 100%);'
  }
};

export default extended;
