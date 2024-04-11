// Constants
export const Kw = 1e-14;
export const Ka_acetic_acid = 1.8e-5; // Used for HC2H3O2
export const Ka_carbonic_acid = 4.3e-7; // Used for H2CO3
export const Ka_bicarbonate = 5.6e-11; // Used for NaHCO3
export const Ka_dihydrogen_phosphate = 6.2e-8; // Used for NaH2PO4
export const Ka_hydrogen_sulfate = 1.2e-2; // Used for NaHSO4
export const Kb_ammonia = 1.8e-5; // Used for NH3
export const dropVolume = 0.036;

// pKa values for weak acids and bases
export const pKa_acetic_acid = 4.745; // Used for HC2H3O2
export const pKa_ammonium_chloride = 9.255; // Used for NH4Cl
export const pKa_sodium_dihydrogen_phosphate = 7.208; // Used for NaH2PO4
export const pKa_sodium_bicarbonate = 10.252; // Used for HO3 // strange minus mark at the end (ignored)
export const pKa_carbonic_acid = 6.367; // Used for H2CO3

export const householdItemsToPH: Record<string, number> = {
	'table-salt': 7.0,
	'baking-soda': 8.3,
	'hydrogen-peroxide': 6.2,
	drano: 12.0,
	'liquid-plumber': 1.0,
	'soft-drink': 3.2,
	'orange-juice': 3.9,
	milk: 6.8,
	'dish-soap': 8.7,
	blood: 7.4,
	'battery-acid': 1.0,
	'ammonia-cleaner': 11.6,
	vinegar: 2.4
};
