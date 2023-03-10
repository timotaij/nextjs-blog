const TeamColor1 = (props) => {
    const teamColors = {
        "ATL": "#C1D32F",
        "BOS": "#BA9653",
        "BKN": "#A1A1A4",
        "CHA": "#00788C",
        "CHI": "#CE1141",
        "CLE": "#041E42",
        "DAL": "#002B5E",
        "DEN": "#FEC524",
        "DET": "#1D42BA",
        "GSW": "#FFC72C",
        "HOU": "#C4CED4",
        "IND": "#FDBB30",
        "LAC": "#1D428A",
        "LAL": "#FDB927",
        "MIA": "#000000",
        "MIL": "#EEE1C6",
        "MIN": "#236192",
        "NOP": "#C8102E",
        "NYK": "#F58426",
        "OKC": "#EF3B24",
        "ORL": "#C4CED4",
        "PHI": "#ED174C",
        "PHO": "#E56020",
        "SAC": "#63727A",
        "SAS": "#000000",
        "TOR": "#000000",
        "UTA": "#00471B",
        "WAS": "#E31837",
    };

    const { teamName } = props;
    return teamColors[teamName] || "#000000"; // fallback color
};

export default TeamColor1;



