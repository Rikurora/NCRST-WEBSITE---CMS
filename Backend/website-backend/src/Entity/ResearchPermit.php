<?php

namespace App\Entity;

use App\Repository\ResearchPermitRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ResearchPermitRepository::class)]
class ResearchPermit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['default'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['default'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['default'])]
    private ?string $description = null;

    #[ORM\Column(length: 50)]
    #[Groups(['default'])]
    private ?string $status = null;

    #[ORM\Column(type: 'datetime')]
    #[Groups(['default'])]
    private ?\DateTimeInterface $submissionDate = null;

    #[ORM\Column(length: 255)]
    #[Groups(['default'])]
    private ?string $applicant = null;

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

    public function setDescription(string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;
        return $this;
    }

    public function getSubmissionDate(): ?\DateTimeInterface
    {
        return $this->submissionDate;
    }

    public function setSubmissionDate(\DateTimeInterface $submissionDate): self
    {
        $this->submissionDate = $submissionDate;
        return $this;
    }

    public function getApplicant(): ?string
    {
        return $this->applicant;
    }

    public function setApplicant(string $applicant): self
    {
        $this->applicant = $applicant;
        return $this;
    }
} 