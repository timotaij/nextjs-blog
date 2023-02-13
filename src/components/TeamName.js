import React from 'react';
import * as NBAIcons from 'react-nba-logos';

const TeamSpons = (props) => {
    const { teamName } = props;
    const Logo = NBAIcons[teamName];
    return <Logo size={140}/>;
};

export default TeamSpons;


