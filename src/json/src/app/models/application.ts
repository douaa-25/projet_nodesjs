export class Application {
  id!: number;
  code!: string;
  title!: string;
  category!: string;
  description!: string;
  accessUrl!: string;
  units!: string[];
  activeUsers!: number;
  audience!: string;
  supportContact!: string;
  developedBy!: string;
  maintainedBy!: string;
  ownerBusiness!: string;
  ownerTechnical!: string;
  status!: "ACTIVE" | "INACTIVE";
  createAt! : Date;
  updateAt! : Date;
}
