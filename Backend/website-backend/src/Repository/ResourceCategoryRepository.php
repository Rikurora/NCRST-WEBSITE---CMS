<?php

namespace App\Repository;

use App\Entity\ResourceCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResourceCategory>
 *
 * @method ResourceCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResourceCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResourceCategory[]    findAll()
 * @method ResourceCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResourceCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResourceCategory::class);
    }

    public function save(ResourceCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ResourceCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 