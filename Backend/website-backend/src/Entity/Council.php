<?php

namespace App\Entity;

use App\Repository\CouncilRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CouncilRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['council:read']],
    denormalizationContext: ['groups' => ['council:write']]
)]
class Council
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['council:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['council:read', 'council:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['council:read', 'council:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['council:read', 'council:write'])]
    private ?string $chairperson = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['council:read', 'council:write'])]
    private ?\DateTimeInterface $establishedDate = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['council:read', 'council:write'])]
    private ?string $status = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['council:read', 'council:write'])]
    private ?string $mandate = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
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

    public function getChairperson(): ?string
    {
        return $this->chairperson;
    }

    public function setChairperson(?string $chairperson): self
    {
        $this->chairperson = $chairperson;
        return $this;
    }

    public function getEstablishedDate(): ?\DateTimeInterface
    {
        return $this->establishedDate;
    }

    public function setEstablishedDate(?\DateTimeInterface $establishedDate): self
    {
        $this->establishedDate = $establishedDate;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;
        return $this;
    }

    public function getMandate(): ?string
    {
        return $this->mandate;
    }

    public function setMandate(?string $mandate): self
    {
        $this->mandate = $mandate;
        return $this;
    }
}