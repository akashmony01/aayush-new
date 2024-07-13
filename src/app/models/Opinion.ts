export class Opinion {
  opinionId: number;
  opinionName: string;
  userId: number;
  custom: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  showAddIcon:boolean;
  spinner:boolean;

  constructor(opinionId, opinionName, userId, isCustom, isActive, showAddIcon?, createdAt?, updatedAt?) {
    this.opinionId = opinionId;
    this.opinionName = opinionName;
    this.userId = userId;
    this.custom = isCustom;
    this.active = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.showAddIcon = showAddIcon;
    this.spinner = false;
  }
}