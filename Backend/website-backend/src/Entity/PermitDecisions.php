<?php

namespace App\Entity;

use App\Repository\PermitDecisionsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PermitDecisionsRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"permit-decisions:read"}},
 *     denormalizationContext={"groups"={"permit-decisions:write"}}
 * )
 */
class PermitDecisions
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"permit-decisions:read"})
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?string $application_reference = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?string $applicant_name = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?string $permit_type = null;

    /**
     * @ORM\Column(type="text")
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?string $application_description = null;

    /**
     * @ORM\Column(type="date")
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?\DateTimeInterface $application_date = null;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?string $decision = null;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?\DateTimeInterface $decision_date = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?string $decision_reason = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?string $conditions = null;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?\DateTimeInterface $expiry_date = null;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?\DateTimeImmutable $created_at = null;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?bool $is_active = true;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"permit-decisions:read", "permit-decisions:write"})
     */
    private ?int $display_order = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getApplicationReference(): ?string
    {
        return $this->application_reference;
    }

    public function setApplicationReference(string $application_reference): static
    {
        $this->application_reference = $application_reference;
        return $this;
    }

    public function getApplicantName(): ?string
    {
        return $this->applicant_name;
    }

    public function setApplicantName(string $applicant_name): static
    {
        $this->applicant_name = $applicant_name;
        return $this;
    }

    public function getPermitType(): ?string
    {
        return $this->permit_type;
    }

    public function setPermitType(string $permit_type): static
    {
        $this->permit_type = $permit_type;
        return $this;
    }

    public function getApplicationDescription(): ?string
    {
        return $this->application_description;
    }

    public function setApplicationDescription(string $application_description): static
    {
        $this->application_description = $application_description;
        return $this;
    }

    public function getApplicationDate(): ?\DateTimeInterface
    {
        return $this->application_date;
    }

    public function setApplicationDate(\DateTimeInterface $application_date): static
    {
        $this->application_date = $application_date;
        return $this;
    }

    public function getDecision(): ?string
    {
        return $this->decision;
    }

    public function setDecision(string $decision): static
    {
        $this->decision = $decision;
        return $this;
    }

    public function getDecisionDate(): ?\DateTimeInterface
    {
        return $this->decision_date;
    }

    public function setDecisionDate(?\DateTimeInterface $decision_date): static
    {
        $this->decision_date = $decision_date;
        return $this;
    }

    public function getDecisionReason(): ?string
    {
        return $this->decision_reason;
    }

    public function setDecisionReason(?string $decision_reason): static
    {
        $this->decision_reason = $decision_reason;
        return $this;
    }

    public function getConditions(): ?string
    {
        return $this->conditions;
    }

    public function setConditions(?string $conditions): static
    {
        $this->conditions = $conditions;
        return $this;
    }

    public function getExpiryDate(): ?\DateTimeInterface
    {
        return $this->expiry_date;
    }

    public function setExpiryDate(?\DateTimeInterface $expiry_date): static
    {
        $this->expiry_date = $expiry_date;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;
        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): static
    {
        $this->is_active = $is_active;
        return $this;
    }

    public function getDisplayOrder(): ?int
    {
        return $this->display_order;
    }

    public function setDisplayOrder(?int $display_order): static
    {
        $this->display_order = $display_order;
        return $this;
    }
}
