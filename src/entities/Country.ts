import { Field, ObjectType, ID } from "type-graphql";
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  emoji: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  continent: string;
}
