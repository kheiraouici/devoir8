-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 22 juin 2025 à 08:13
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `artisan`
--

-- --------------------------------------------------------

--
-- Structure de la table `liste`
--

CREATE TABLE `liste` (
  `id_nom` int(11) NOT NULL,
  `nom` varchar(200) NOT NULL,
  `specialite` varchar(200) NOT NULL,
  `note` float(10,0) NOT NULL,
  `ville` varchar(200) NOT NULL,
  `apropos` varchar(255) NOT NULL,
  `email` varchar(200) NOT NULL,
  `site` varchar(200) NOT NULL,
  `categorie` varchar(200) NOT NULL,
  `top` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `liste`
--

INSERT INTO `liste` (`id_nom`, `nom`, `specialite`, `note`, `ville`, `apropos`, `email`, `site`, `categorie`, `top`) VALUES
(1, 'Boucherie Dumont', 'Boucher', 5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', '', 'Alimentation', 'FAUX'),
(3, 'Au pain chaud', 'Boulanger', 5, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', '', 'Alimentation', 'VRAI'),
(4, 'Chocolaterie Labbé', 'Chocolatier', 5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 'Alimentation', 'VRAI'),
(5, 'Traiteur Truchon', 'Traiteur', 4, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 'Alimentation', 'FAUX'),
(6, 'Orville Salmons', 'Chauffagiste', 0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', '', 'Bâtiment', 'VRAI'),
(7, 'Mont Blanc Eléctricité', 'Electricien', 5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 'Bâtiment', 'FAUX'),
(8, 'Boutot & fils', 'Menuisier', 5, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 'Bâtiment', 'FAUX'),
(9, 'Vallis Bellemare', 'Plombier', 0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 'Bâtiment', 'FAUX'),
(10, 'Claude Quinn', 'Bijoutier', 4, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', '', 'Fabrication', 'FAUX'),
(11, 'Amitee Lécuyer', 'Couturier', 5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', '', 'Fabrication', 'FAUX'),
(12, 'Ernest Carignan', 'Ferronier', 0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', '', 'Fabrication', 'FAUX'),
(13, 'Royden Charbonneau', 'Coiffeur', 4, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', '', 'Services', 'FAUX'),
(14, 'Leala Dennis', 'Coiffeur', 4, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 'Services', 'FAUX'),
(15, 'C\'est sup\'hair', 'Coiffeur', 4, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', 'Services', 'FAUX'),
(16, 'Le monde des fleurs', 'Fleuriste', 5, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 'Services', 'FAUX'),
(17, 'Valérie Laderoute', 'Toiletteur', 4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', '', 'Services', 'FAUX'),
(18, 'CM Graphisme', 'Webdesign', 4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 'Services', 'FAUX');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `liste`
--
ALTER TABLE `liste`
  ADD PRIMARY KEY (`id_nom`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `liste`
--
ALTER TABLE `liste`
  MODIFY `id_nom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
