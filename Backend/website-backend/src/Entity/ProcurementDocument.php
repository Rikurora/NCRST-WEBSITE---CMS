<?php

namespace App\Entity;

use App\Repository\ProcurementDocumentRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProcurementDocumentRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['procurement-document:read']],
    denormalizationContext: ['groups' => ['procurement-document:write']]
)]
class ProcurementDocument
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['procurement-document:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['procurement-document:read', 'procurement-document:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['procurement-document:read', 'procurement-document:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['procurement-document:read', 'procurement-document:write'])]
    private ?string $file = null;

    #[ORM\ManyToOne(targetEntity: ProcurementBid::class)]
    #[Groups(['procurement-document:read', 'procurement-document:write'])]
    private ?ProcurementBid $bid = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(?string $file): self
    {
        $this->file = $file;
        return $this;
    }

    public function getBid(): ?ProcurementBid
    {
        return $this->bid;
    }

    public function setBid(?ProcurementBid $bid): self
    {
        $this->bid = $bid;
        return $this;
    }
} 