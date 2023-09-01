/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE assets CASCADE');
  await knex('assets').del()
  await knex('assets').insert([
    {name: 'SR-1 Normandy', mission_type: 'Orbital Warfare', orbital_regime: 'MEO', description: ' Originally designed for high-speed racing, the craft was given armaments and converted into a space-ready fighter', image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/11/Normandy-SR1-over-planet.jpg', users_id: 1},
    {name: 'Swordfish', mission_type: 'Orbital Warfare', orbital_regime: 'LEO', description: 'The SR-1 Normandy is a prototype "deep scout" frigate, first of the eponymous Normandy class, co-developed by the Alliance and the Turian Hierarchy with the sponsorship of the Citadel Council.', image: 'https://c4.wallpaperflare.com/wallpaper/967/1016/997/cowboy-bebop-swordfish-ii-1920x1200-anime-cowboy-bebop-hd-art-wallpaper-preview.jpg', users_id: 1},
    {name: 'AEHF-1', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'AEHF-1 is a military communications satellite operated by the United States Space Force. It is the first of six satellites to be launched as part of the Advanced Extremely High Frequency program.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/AEHF_1.jpg', users_id: 1},
    {name: 'AEHF-2', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'AEHF-2 is a military communications satellite operated by the United States Space Force. It is the second of six satellites to be launched as part of the Advanced Extremely High Frequency program.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/AEHF_1.jpg', users_id: 1},
    {name: 'AEHF-3', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'AEHF-3 is a military communications satellite operated by the United States Space Force. It is the third of six satellites to be launched as part of the Advanced Extremely High Frequency program.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/AEHF_1.jpg', users_id: 1},
    {name: 'AEHF-4', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'AEHF-4 is a military communications satellite operated by the United States Space Force. It is the fourth of six satellites to be launched as part of the Advanced Extremely High Frequency program.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/AEHF_1.jpg', users_id: 1},
    {name: 'AEHF-5', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'AEHF-5 is a military communications satellite operated by the United States Space Force. It is the fifth of six satellites to be launched as part of the Advanced Extremely High Frequency program.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/AEHF_1.jpg', users_id: 1},
    {name: 'AEHF-6', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'AEHF-6 is a military communications satellite operated by the United States Space Force. It is the sixth of six satellites to be launched as part of the Advanced Extremely High Frequency program.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/AEHF_1.jpg', users_id: 1},
    {name: 'MILSTAR-1', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'Milstar satellites provide secure, jam resistant, worldwide communications to meet the requirements of the United States military.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Milstar.jpg/1280px-Milstar.jpg', users_id: 1},
    {name: 'MILSTAR-2', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'Milstar satellites provide secure, jam resistant, worldwide communications to meet the requirements of the United States military.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Milstar.jpg/1280px-Milstar.jpg', users_id: 1},
    {name: 'MILSTAR-4', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'Milstar satellites provide secure, jam resistant, worldwide communications to meet the requirements of the United States military.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Milstar.jpg/1280px-Milstar.jpg', users_id: 1},
    {name: 'MILSTAR-5', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'Milstar satellites provide secure, jam resistant, worldwide communications to meet the requirements of the United States military.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Milstar.jpg/1280px-Milstar.jpg', users_id: 1},
    {name: 'MILSTAR-6', mission_type: 'SATCOM', orbital_regime: 'GEO', description: 'Milstar satellites provide secure, jam resistant, worldwide communications to meet the requirements of the United States military.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Milstar.jpg/1280px-Milstar.jpg', users_id: 1},
    {name: 'SBIRS-GEO-1', mission_type: 'OPIR', orbital_regime: 'GEO', description: 'SBIRS-GEO  is the geostationary component of the SBIRS-High program, which will replace the DSP system of early warning satellites in providing early warning for Intercontinental Ballistic Missile launches.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBIRS_GEO-3.jpg/800px-SBIRS_GEO-3.jpg', users_id: 1},
    {name: 'SBIRS-GEO-2', mission_type: 'OPIR', orbital_regime: 'GEO', description: 'SBIRS-GEO  is the geostationary component of the SBIRS-High program, which will replace the DSP system of early warning satellites in providing early warning for Intercontinental Ballistic Missile launches.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBIRS_GEO-3.jpg/800px-SBIRS_GEO-3.jpg', users_id: 1},
    {name: 'SBIRS-GEO-3', mission_type: 'OPIR', orbital_regime: 'GEO', description: 'SBIRS-GEO  is the geostationary component of the SBIRS-High program, which will replace the DSP system of early warning satellites in providing early warning for Intercontinental Ballistic Missile launches.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBIRS_GEO-3.jpg/800px-SBIRS_GEO-3.jpg', users_id: 1},
    {name: 'SBIRS-GEO-4', mission_type: 'OPIR', orbital_regime: 'GEO', description: 'SBIRS-GEO  is the geostationary component of the SBIRS-High program, which will replace the DSP system of early warning satellites in providing early warning for Intercontinental Ballistic Missile launches.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBIRS_GEO-3.jpg/800px-SBIRS_GEO-3.jpg', users_id: 1},
    {name: 'SBIRS-GEO-5', mission_type: 'OPIR', orbital_regime: 'GEO', description: 'SBIRS-GEO  is the geostationary component of the SBIRS-High program, which will replace the DSP system of early warning satellites in providing early warning for Intercontinental Ballistic Missile launches.', image: 'https://space.skyrocket.de/img_sat/sbirs-geo-5__1.jpg', users_id: 1},
    {name: 'SBIRS-GEO-6', mission_type: 'OPIR', orbital_regime: 'GEO', description: 'SBIRS-GEO  is the geostationary component of the SBIRS-High program, which will replace the DSP system of early warning satellites in providing early warning for Intercontinental Ballistic Missile launches.', image: 'https://space.skyrocket.de/img_sat/sbirs-geo-5__1.jpg', users_id: 1},
    {name: 'GSSAP-1', mission_type: 'Electro-Optical', orbital_regime: 'GEO', description: 'GSSAP is a series of space surveillance satellites developed covertly by the Air Force and Orbital Sciences to provide a space-based capability operating in the near-geosynchronous orbit regime.', image: 'https://space.skyrocket.de/img_sat/gssap-1__1.jpg', users_id: 1},
    {name: 'GSSAP-2', mission_type: 'Electro-Optical', orbital_regime: 'GEO', description: 'GSSAP is a series of space surveillance satellites developed covertly by the Air Force and Orbital Sciences to provide a space-based capability operating in the near-geosynchronous orbit regime.', image: 'https://space.skyrocket.de/img_sat/gssap-1__1.jpg', users_id: 1},
    {name: 'GSSAP-3', mission_type: 'Electro-Optical', orbital_regime: 'GEO', description: 'GSSAP is a series of space surveillance satellites developed covertly by the Air Force and Orbital Sciences to provide a space-based capability operating in the near-geosynchronous orbit regime.', image: 'https://space.skyrocket.de/img_sat/gssap-1__1.jpg', users_id: 1},
    {name: 'GSSAP-4', mission_type: 'Electro-Optical', orbital_regime: 'GEO', description: 'GSSAP is a series of space surveillance satellites developed covertly by the Air Force and Orbital Sciences to provide a space-based capability operating in the near-geosynchronous orbit regime.', image: 'https://space.skyrocket.de/img_sat/gssap-1__1.jpg', users_id: 1},
    {name: 'GSSAP-5', mission_type: 'Electro-Optical', orbital_regime: 'GEO', description: 'GSSAP is a series of space surveillance satellites developed covertly by the Air Force and Orbital Sciences to provide a space-based capability operating in the near-geosynchronous orbit regime.', image: 'https://space.skyrocket.de/img_sat/gssap-1__1.jpg', users_id: 1},
    {name: 'GSSAP-6', mission_type: 'Electro-Optical', orbital_regime: 'GEO', description: 'GSSAP is a series of space surveillance satellites developed covertly by the Air Force and Orbital Sciences to provide a space-based capability operating in the near-geosynchronous orbit regime.', image: 'https://space.skyrocket.de/img_sat/gssap-1__1.jpg', users_id: 1}

  ]);
};
