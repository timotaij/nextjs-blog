const TeamColor2 = (props) => {
    const teamColors = {
        ATL: '#E03A3E',
        BOS: '#007A33',
        BKN: '#000000',
        CHA: '#1D1160',
        CHI: '#CE1141',
        CLE: '#860038',
        DAL: '#00538C',
        DEN: '#0E2240',
        DET: '#C8102E',
        GSW: '#1D428A',
        HOU: '#CE1141',
        IND: '#002D62',
        LAC: '#C8102E',
        LAL: '#552583',
        MEM: '#5D76A9',
        MIA: '#98002E',
        MIL: '#00471B',
        MIN: '#0C2340',
        NOP: '#0C2340',
        NYK: '#006BB6',
        OKC: '#007AC1',
        ORL: '#006BB6',
        PHO: '#1D1160',
        POR: '#E03A3E',
        SAC: '#5A2D81',
        SAS: '#C4CED4',
        TOR: '#CE1141',
        UTA: '#002B5C',
        WAS: '#002B5C',
    };

    const { teamName } = props;
    return teamColors[teamName] || "#000000"; // fallback color
};

export default TeamColor2;