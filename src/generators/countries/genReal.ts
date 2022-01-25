import {Country, Regime} from "../../types/Country";

export default (): Partial<Country>[] => {
  return [
    {
      name: 'USA',
      regime: Regime.FLAWED_DEMOCRACY,
    },
    // new Country('USA', Origin.NORTH_AMERICA, Ideology.REPUBLIC, Regime.FLAWED_DEMOCRACY, 0.8),
    // new Country('Mexico', Origin.CENTRAL_AMERICA, Ideology.REPUBLIC, Regime.FLAWED_DEMOCRACY, 0.8),
    // new Country('Cuba', Origin.CARIBBEAN, Ideology.REPUBLIC, Regime.AUTHORITARIAN, 0.8),
    // new Country('Brazil', Origin.SOUTH_AMERICA, Ideology.REPUBLIC, Regime.FLAWED_DEMOCRACY, 0.8),
    // new Country('Algeria', Origin.MAGHREB, Ideology.MONARCHY, Regime.FLAWED_DEMOCRACY, 0.8),
    // new Country('Congo', Origin.SUB_SAHARAN_AFRICA, Ideology.REPUBLIC, Regime.FLAWED_DEMOCRACY, 0.8),
    // new Country('South Africa', Origin.SOUTHERN_AFRICA, Ideology.REPUBLIC, Regime.FLAWED_DEMOCRACY, 0.8),
    // new Country('Saudi Arabia', Origin.MIDDLE_EAST, Ideology.REPUBLIC, Regime.TOTALITARIAN, 0.8),
    // new Country('Russia', Origin.EASTERN_EUROPE, Ideology.REPUBLIC, Regime.AUTHORITARIAN, 0.8),
    // new Country('Belarus', Origin.EASTERN_EUROPE, Ideology.REPUBLIC, Regime.TOTALITARIAN, 0.8),
    // new Country('France', Origin.WESTERN_EUROPE, Ideology.REPUBLIC, Regime.FLAWED_DEMOCRACY, 0.8),
    // new Country('Indonesia', Origin.SOUTHEAST_ASIA, Ideology.REPUBLIC, Regime.AUTHORITARIAN, 0.8),
    // new Country('China', Origin.EASTERN_ASIA, Ideology.REPUBLIC, Regime.AUTHORITARIAN, 0.8),
    // new Country('North Korea', Origin.EASTERN_ASIA, Ideology.MONARCHY, Regime.TOTALITARIAN, 0.8),
    // new Country('India', Origin.SOUTHERN_ASIA, Ideology.REPUBLIC, Regime.FLAWED_DEMOCRACY, 0.8),
    // new Country('Australia', Origin.AUSTRALASIA, Ideology.REPUBLIC, Regime.DEMOCRACY, 0.8),
  ]
}
