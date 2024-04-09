import * as calcs from '@/helpers/calculations';
import * as consts from '@/helpers/constants';
import type { SelectedBuffer } from '../types';

export function calculateBufferSystem(
	buffer: SelectedBuffer,
	acidConc: number,
	baseConc: number,
	currentDrop: string,
	drops: number
) {
	let M_HCl = 0;
	let M_NaOH = 0;
	let pKa_acid = 0;

	switch (buffer) {
		case 'HC2H3O2 & NaC2H3O2':
			pKa_acid = consts.pKa_acetic_acid;
			break;
		case 'NH4Cl & NH3':
			pKa_acid = consts.pKa_ammonium_chloride;
			break;
		case 'NaH2PO4 & Na2HPO4':
			pKa_acid = consts.pKa_sodium_dihydrogen_phosphate;
			break;
		case 'NaHCO3 & Na2CO3':
			pKa_acid = consts.pKa_sodium_bicarbonate;
			break;
		case 'H2CO3 & NaHCO3':
			pKa_acid = consts.pKa_carbonic_acid;
			break;
	}

	if (currentDrop === '.1M-HCl' || currentDrop === '.01M HCl') {
		if (currentDrop === '.1M-HCl') {
			M_HCl = 0.1;
		} else {
			M_HCl = 0.01;
		}

		const HC2H3O2_conc = calcs.get_HCl_acid(acidConc, M_HCl, drops);
		const NaC2H3O2_conc = calcs.get_HCl_base(baseConc, M_HCl, drops);

		if (HC2H3O2_conc <= 0 || NaC2H3O2_conc <= 0) {
			calcs.get_NaC2H3O2_buffer_overload();
			return NaN;
		}

		return calcs.get_buffer_system(pKa_acid, acidConc, baseConc, M_HCl, drops);
	} else if (currentDrop === '.1M-NaOH' || currentDrop === '.01M NaOH') {
		if (currentDrop === '.1M-NaOH') {
			M_NaOH = 0.1;
		} else {
			M_NaOH = 0.01;
		}

		const HC2H3O2_conc = calcs.get_NaOH_acid(acidConc, M_NaOH, drops);
		const NaC2H3O2_conc = calcs.get_NaOH_base(baseConc, M_NaOH, drops);

		if (HC2H3O2_conc <= 0 || NaC2H3O2_conc <= 0) {
			calcs.get_HC2H3O2_buffer_overload();
			return NaN;
		}

		return calcs.get_buffer_system(pKa_acid, acidConc, baseConc, M_NaOH, drops);
	}

	return NaN;
}
