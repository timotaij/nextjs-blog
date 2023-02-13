const PlayerHeadshot = ({ playerID, Player }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png`}
                 alt={`Headshot of player ${playerID}`}
                 style={{ width: '160px', height: '120px', marginRight: '10px' }}
            />
            <p>{Player}</p>
        </div>
    );
};

export default PlayerHeadshot;