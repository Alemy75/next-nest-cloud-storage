import { UserEntity } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('files')
export class FileEntity {

    @PrimaryGeneratedColumn()
    is: number;

    @Column()
    fileName: string;

    @Column()
    originalName: string;

    @Column()
    mimetype: string;

    @ManyToOne(() => UserEntity, (user) => user.files)
    user: UserEntity;

    @DeleteDateColumn()
    deletedAt?: Date;
}
