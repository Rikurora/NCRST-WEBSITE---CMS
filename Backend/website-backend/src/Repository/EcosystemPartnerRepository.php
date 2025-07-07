<?php

namespace App\Repository;

use App\Entity\EcosystemPartner;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EcosystemPartner>
 *
 * @method EcosystemPartner|null find($id, $lockMode = null, $lockVersion = null)
 * @method EcosystemPartner|null findOneBy(array $criteria, array $orderBy = null)
 * @method EcosystemPartner[]    findAll()
 * @method EcosystemPartner[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EcosystemPartnerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EcosystemPartner::class);
    }

    public function save(EcosystemPartner $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EcosystemPartner $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 