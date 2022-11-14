import { T } from "./TypeTest";

export class Time {
	/**
	 *
	 * @param date Date
	 * @param fmtPattern like "D:h"
	 * @param fmtModifier the date modifier returned by the function
	 * @returns string
	 */
	static datefmt(
		date: Date,
		fmtPattern = "Y-M-D:h-m-s",
		fmtModifier = "/:"
	): string {
		if (!T.isDate(date)) return "Unexpected parameter pass";

		let stageArr: any[] = fmtPattern
			.split(":")
			.map((stage: string, index: number) => {
				return stage.split("-");
			});
		const Y = date.getFullYear();
		const M = date.getMonth() + 1;
		const D = date.getDate();

		const h = date.getHours();
		const m = date.getMinutes();
		const s = date.getSeconds();

		stageArr = stageArr.map((stage2: string[], index: number) => {
			const mod = fmtModifier[index] ? fmtModifier[index] : "-";
			return stage2
				.map(i => {
					return eval(i);
				})
				.join(mod);
		});
		return stageArr.join(" ");
	}
}
