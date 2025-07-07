<?php

namespace App\Repository;

use App\Entity\NewsCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<NewsCategory>
 *
 * @method NewsCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method NewsCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method NewsCategory[]    findAll()
 * @method NewsCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsCategory::class);
    }

    public function save(NewsCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(NewsCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 