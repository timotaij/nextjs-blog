import Image from "next/image";

const PlayerHeadshot = ({ playerID, Player }) => {
  const formattedPlayerID = playerID.replace(/\D/g, "");
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${formattedPlayerID}.png`}
        width={220}
        height={170}
        alt={`Headshot of player ${formattedPlayerID}`}
        style={{
          marginRight: "10px",
          marginBottom: "-15px",
        }}
      />
      <p>{Player}</p>
    </div>
  );
};

export default PlayerHeadshot;
