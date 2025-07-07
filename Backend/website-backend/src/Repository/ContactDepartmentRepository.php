<?php

namespace App\Repository;

use App\Entity\ContactDepartment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ContactDepartment>
 *
 * @method ContactDepartment|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContactDepartment|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContactDepartment[]    findAll()
 * @method ContactDepartment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContactDepartmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContactDepartment::class);
    }

    public function save(ContactDepartment $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ContactDepartment $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 