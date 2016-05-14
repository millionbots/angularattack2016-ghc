import {ISpaceObject, SpaceObjectType} from './';

export class Planet implements ISpaceObject {
	$key: string;
	type: SpaceObjectType;
	x: number;
	y: number;
	currentScore: number = 0;
	stolenScore: number = 0;
	totalScore: number = 0;
	image: string;
	ownerKey: string;
	constructor(x, y, image) {
		this.x = x;
		this.y = y;
		this.type = SpaceObjectType.Planet;
		this.image = image;
	}
}
