const PlayerHeadshot = ({ playerID, Player }) => {
    const formattedPlayerID = playerID.replace(/\D/g, '');
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${formattedPlayerID}.png`}
                 alt={`Headshot of player ${formattedPlayerID}`}
                 style={{ width: '220px', height: '170px', marginRight: '10px', marginBottom: '-15px'}}
            />
            <p>{Player}</p>
        </div>
    );
};

export default PlayerHeadshot;