<?php

namespace App\Repository;

use App\Entity\IksKnowledgeArea;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<IksKnowledgeArea>
 *
 * @method IksKnowledgeArea|null find($id, $lockMode = null, $lockVersion = null)
 * @method IksKnowledgeArea|null findOneBy(array $criteria, array $orderBy = null)
 * @method IksKnowledgeArea[]    findAll()
 * @method IksKnowledgeArea[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IksKnowledgeAreaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IksKnowledgeArea::class);
    }

    public function save(IksKnowledgeArea $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(IksKnowledgeArea $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}