import React from 'react';

const TeamSpons = (props) => {
    const { teamName } = props;
    const Logo = NBAIcons[teamName];
    return <Logo size={140}/>;
};

export default TeamSpons;