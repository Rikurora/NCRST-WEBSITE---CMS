<?php

namespace App\Repository;

use App\Entity\ProcurementDocument;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProcurementDocument>
 *
 * @method ProcurementDocument|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProcurementDocument|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProcurementDocument[]    findAll()
 * @method ProcurementDocument[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProcurementDocumentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProcurementDocument::class);
    }

    public function save(ProcurementDocument $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ProcurementDocument $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 